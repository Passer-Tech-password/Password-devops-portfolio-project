import fs from 'fs/promises';
import path from 'path';

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
    skills: Array<{
      id: string;
      name: string;
      level: number;
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

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data file:", error);
    // Return default empty structure if file read fails
    return {
      profile: { name: "", role: "", email: "", location: "", avatar: "", cvLink: "", social: { facebook: "", twitter: "", linkedin: "", github: "" } },
      resume: { experience: [], education: [], skills: [] },
      projects: [],
      certifications: [],
      blog: []
    };
  }
}

export async function updatePortfolioData(newData: PortfolioData): Promise<{ success: boolean; error?: string }> {
  try {
    // Atomic write strategy: write to temp file then rename
    // This avoids file locking issues and partial writes
    const tempFile = `${DATA_FILE}.tmp-${Date.now()}`;
    
    await fs.writeFile(tempFile, JSON.stringify(newData, null, 2), 'utf-8');
    
    // Rename/move (atomic operation on POSIX, usually safe on Windows if target exists)
    try {
        await fs.rename(tempFile, DATA_FILE);
    } catch (renameError) {
        // Fallback for Windows if rename fails (sometimes due to permissions or locking)
        // Copy and delete is less atomic but works
        await fs.copyFile(tempFile, DATA_FILE);
        await fs.unlink(tempFile);
    }

    return { success: true };
  } catch (error) {
    console.error("Error writing data file:", error);
    return { success: false, error: String(error) };
  }
}
