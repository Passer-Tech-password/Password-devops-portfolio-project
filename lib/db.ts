import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'portfolio.json');

export interface Profile {
  name: string;
  role: string;
  email: string;
  location: string;
  cvLink: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Blog {
    id: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    image: string;
    link: string;
}

export interface PortfolioData {
  profile: Profile;
  resume: {
    experience: Experience[];
    education: Education[];
    skills: Skill[];
  };
  projects: Project[];
  blogs: Blog[];
}

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data file:', error);
    // Return default empty structure if file read fails
    return {
      profile: { name: '', role: '', email: '', location: '', cvLink: '', social: { facebook: '', twitter: '', linkedin: '', github: '' } },
      resume: { experience: [], education: [], skills: [] },
      projects: [],
      blogs: []
    };
  }
}

export async function savePortfolioData(data: PortfolioData): Promise<void> {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data file:', error);
    throw new Error('Failed to save data');
  }
}
