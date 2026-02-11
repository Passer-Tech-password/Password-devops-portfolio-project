import { getPortfolioData } from '@/lib/data';
import { fetchFromGitHub } from '@/lib/github-utils';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  // Try to fetch fresh data from GitHub first (if token exists)
  // This ensures the Admin Panel always shows the LATEST pending changes,
  // even if Vercel hasn't finished redeploying yet.
  let data = await fetchFromGitHub('data.json');

  // Fallback to local data (built-in) if GitHub fetch fails or no token
  if (!data) {
    data = await getPortfolioData();
  }
  
  return <AdminDashboard data={data} />;
}
