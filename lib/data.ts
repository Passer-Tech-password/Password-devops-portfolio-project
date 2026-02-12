import fs from 'fs/promises';
import path from 'path';
import { saveToGitHub, fetchFromGitHub } from './github-utils';

const DATA_FILE = path.join(process.cwd(), 'data.json');

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    email: string;
    location: string;
    avatar: string;
    cvLink: string;
    social: {
      facebook: string;
      twitter: string;
      linkedin: string;
      github: string;
      tiktok?: string;
      youtube?: string;
      whatsapp?: string;
      telegram?: string;
    };
  };
  resume: {
    experience: Array<{
      id: string;
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      id: string;
      degree: string;
      school: string;
      period: string;
      description: string;
    }>;
    nonformalEducation: Array<{
      id: string;
      program: string;
      organization: string;
      period: string;
      description: string;
      location: string;
    }>;
    skills: Array<{
      id: string;
      name: string;
      level: number;
      category?: string;
      proficiency?: string;
    }>;
  };
  projects: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    link: string;
  }>;
  certifications: Array<{
    id: string;
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
  }>;
  blog: Array<{
    id: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    slug: string;
  }>;
}

export async function getPortfolioData(options: { fetchRemote?: boolean } = {}): Promise<PortfolioData> {
  const { fetchRemote = false } = options;

  // 1. Try fetching from GitHub (Only if explicitly requested and in Production with token)
  // This avoids rate limits on public pages and allows local dev override
  if (fetchRemote && process.env.NODE_ENV === 'production' && process.env.GITHUB_TOKEN) {
    try {
      const githubData = await fetchFromGitHub('data.json');
      if (githubData) {
        return githubData;
      }
    } catch (error) {
      console.warn("Failed to fetch from GitHub, falling back to local file:", error);
    }
  }

  // 2. Fallback to local file system (Build artifact or local file)
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data file:", error);
    // Return default empty structure if file read fails
    return {
      profile: { name: "", role: "", email: "", location: "", avatar: "", cvLink: "", social: { facebook: "", twitter: "", linkedin: "", github: "" } },
      resume: { experience: [], education: [], nonformalEducation: [], skills: [] },
      projects: [],
      certifications: [],
      blog: []
    };
  }
}

async function writeWithRetry(filePath: string, data: string, retries = 3, delay = 100): Promise<void> {
  for (let i = 0; i < retries; i++) {
    try {
      await fs.writeFile(filePath, data, 'utf-8');
      return;
    } catch (error: any) {
      if (i === retries - 1) throw error; // Throw on last attempt
      
      // If permission error or busy, wait and retry
      if (error.code === 'EPERM' || error.code === 'EBUSY') {
        console.warn(`Write failed (attempt ${i + 1}/${retries}), retrying...`, error.message);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        throw error; // Throw immediately for other errors
      }
    }
  }
}

export async function updatePortfolioData(newData: PortfolioData): Promise<{ success: boolean; error?: string }> {
  try {
    const dataString = JSON.stringify(newData, null, 2);

    // If GITHUB_TOKEN is present, save to GitHub (Production/Vercel)
    if (process.env.GITHUB_TOKEN) {
      try {
        await saveToGitHub('data.json', dataString, 'chore: update portfolio data via admin panel');
        return { success: true };
      } catch (githubError: any) {
        console.error("GitHub save failed:", githubError);
        return { success: false, error: `GitHub Save Failed: ${githubError.message}` };
      }
    }

    // Local Development Fallback: File System
    // Atomic write strategy: write to temp file then rename
    // This avoids file locking issues and partial writes
    const tempFile = `${DATA_FILE}.tmp-${Date.now()}`;
    
    // Use retry logic for the initial write to temp file
    await writeWithRetry(tempFile, dataString);
    
    // Rename/move (atomic operation on POSIX, usually safe on Windows if target exists)
    try {
        await fs.rename(tempFile, DATA_FILE);
    } catch (renameError) {
        // Fallback for Windows if rename fails (sometimes due to permissions or locking)
        // Copy and delete is less atomic but works
        try {
            await fs.copyFile(tempFile, DATA_FILE);
            await fs.unlink(tempFile);
        } catch (copyError) {
            // If even copy fails, try to write directly to the target file with retry
            // This is the "last resort" fallback
            console.warn("Atomic rename/copy failed, falling back to direct write:", copyError);
            await writeWithRetry(DATA_FILE, dataString);
            // Try to clean up temp file, but don't fail if we can't
            try { await fs.unlink(tempFile); } catch (e) {} 
        }
    }

    return { success: true };
  } catch (error) {
    console.error("Error writing data file:", error);
    return { success: false, error: String(error) };
  }
}
