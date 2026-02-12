import { getPortfolioData } from '@/lib/data';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  // getPortfolioData now automatically tries to fetch fresh data from GitHub
  // if the GITHUB_TOKEN environment variable is set.
  const data = await getPortfolioData();
  
  return <AdminDashboard data={data} />;
}
