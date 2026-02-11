
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.GITHUB_OWNER || 'Passer-Tech-password';
const REPO_NAME = process.env.GITHUB_REPO || 'Password-devops-portfolio-project';
const BRANCH = 'main';

export async function saveToGitHub(path: string, content: string | Buffer, message: string) {
  if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN is not set");
  }

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
  
  // 1. Get current file SHA (if it exists)
  let sha: string | undefined;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      sha = data.sha;
    }
  } catch (error) {
    console.warn("Could not fetch existing file SHA:", error);
  }

  // 2. Prepare content (Base64)
  const contentBase64 = Buffer.isBuffer(content) 
    ? content.toString('base64') 
    : Buffer.from(content).toString('base64');

  // 3. Create/Update file
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch: BRANCH,
      sha, // Include SHA if we are updating
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitHub API Error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return await response.json();
}

export async function fetchFromGitHub(path: string) {
  if (!GITHUB_TOKEN) {
    return null;
  }

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      cache: 'no-store', // Always fetch fresh data
    });

    if (response.ok) {
      const data = await response.json();
      const content = Buffer.from(data.content, 'base64').toString('utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error("Error fetching from GitHub:", error);
  }
  return null;
}
