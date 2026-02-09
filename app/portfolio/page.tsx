import { getPortfolioData } from "@/lib/data";
import PortfolioContent from "./components/PortfolioContent";

export default async function Portfolio() {
  const data = await getPortfolioData();
  const projects = data.projects;
  const certifications = data.certifications;

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          Portfolio
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
      </header>

      <PortfolioContent projects={projects} certifications={certifications} />
    </div>
  );
}
