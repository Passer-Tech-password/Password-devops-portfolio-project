'use server';

import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { saveToGitHub } from '@/lib/github-utils';

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    if (!file) {
      return { error: 'No file uploaded', success: false };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const filename = `${uuidv4()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
    
    // If GITHUB_TOKEN is present, save to GitHub (Production/Vercel)
    if (process.env.GITHUB_TOKEN) {
      try {
        const githubPath = `public/uploads/${filename}`;
        await saveToGitHub(githubPath, buffer, `chore: upload image ${filename}`);
        return { 
          url: `/uploads/${filename}`, 
          success: true 
        };
      } catch (githubError: any) {
        console.error('GitHub upload error:', githubError);
        return { error: `GitHub Upload Failed: ${githubError.message}`, success: false };
      }
    }

    // Local Development Fallback
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    
    // Ensure upload directory exists
    try {
        await writeFile(join(uploadDir, 'test.txt'), '');
    } catch (e) {
        // Directory might not exist
        const fs = require('fs');
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, { recursive: true });
        }
    }

    const filepath = join(uploadDir, filename);
    await writeFile(filepath, buffer);

    return { 
      url: `/uploads/${filename}`, 
      success: true 
    };
  } catch (error) {
    console.error('Upload error:', error);
    return { error: 'Upload failed', success: false };
  }
}
