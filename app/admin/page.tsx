import { getPortfolioData } from '@/lib/data';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const data = await getPortfolioData();
  
  return <AdminDashboard data={data} />;
}
