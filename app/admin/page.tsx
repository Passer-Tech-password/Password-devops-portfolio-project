import { getPortfolioData } from '@/lib/data';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  // getPortfolioData now automatically tries to fetch fresh data from GitHub
  // if the GITHUB_TOKEN environment variable is set.
  // We force fetchRemote: true here to ensure Admin always sees the latest pending changes
  // regardless of Vercel build status.
  const data = await getPortfolioData({ fetchRemote: true });
  
  return <AdminDashboard data={data} />;
}
