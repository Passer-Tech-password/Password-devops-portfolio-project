import { Eye } from "lucide-react";
import { getPortfolioData } from "@/lib/data";

export default async function Portfolio() {
  const data = await getPortfolioData();
  const projects = data.projects;

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
          Portfolio
          <span className="absolute bottom-[-10px] left-0 w-10 h-1.5 bg-blue-500 rounded-full"></span>
        </h2>
      </header>

      {/* Filter Categories (Static for now) */}
      <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
          <button className="text-blue-500 font-medium">All</button>
          <button className="hover:text-white transition-colors">DevOps</button>
          <button className="hover:text-white transition-colors">SRE</button>
          <button className="hover:text-white transition-colors">Cloud</button>
          <button className="hover:text-white transition-colors">Web Development</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <div className="aspect-video w-full bg-[#2b2b2c] relative">
               {/* Placeholder for project image if not available */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <span className="text-4xl font-bold opacity-20">{index + 1}</span>
               </div>
               {project.image && project.image !== "/project-1.jpg" && (
                   // eslint-disable-next-line @next/next/no-img-element
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
               )}
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href={project.link} className="bg-[#2b2b2c] p-3 rounded-xl hover:bg-blue-600 transition-colors">
                    <Eye className="text-blue-500 group-hover:text-white" size={24} />
                </a>
            </div>

            <div className="mt-4">
                <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
