"use client";

import { useState } from "react";
import { Eye, Award } from "lucide-react";
import { PortfolioData } from "@/lib/data";

interface PortfolioContentProps {
  projects: PortfolioData['projects'];
  certifications: PortfolioData['certifications'];
}

export default function PortfolioContent({ projects, certifications }: PortfolioContentProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'certifications'>('projects');
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Get unique categories for projects
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-800 pb-4 mb-8">
        <button
          onClick={() => setActiveTab('projects')}
          className={`text-lg font-medium pb-4 -mb-4 transition-colors relative ${
            activeTab === 'projects' ? 'text-blue-500' : 'text-gray-400 hover:text-white'
          }`}
        >
          Projects
          {activeTab === 'projects' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-full"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`text-lg font-medium pb-4 -mb-4 transition-colors relative ${
            activeTab === 'certifications' ? 'text-blue-500' : 'text-gray-400 hover:text-white'
          }`}
        >
          Certifications
          {activeTab === 'certifications' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-full"></span>
          )}
        </button>
      </div>

      {activeTab === 'projects' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Project Filters */}
          <div className="flex flex-wrap gap-4 text-gray-400 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`transition-colors ${
                  filter === cat ? 'text-blue-500 font-medium' : 'hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1e1e1f] border border-transparent hover:border-gray-800 transition-all">
                <div className="aspect-video w-full bg-[#2b2b2c] relative overflow-hidden">
                  {project.image ? (
                     // eslint-disable-next-line @next/next/no-img-element
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                  ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        <span className="text-4xl font-bold opacity-20">{index + 1}</span>
                     </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#2b2b2c] p-3 rounded-xl hover:bg-blue-600 transition-colors">
                          <Eye className="text-blue-500 group-hover:text-white" size={24} />
                      </a>
                  </div>
                </div>

                <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-blue-400 text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'certifications' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1e1e1f] border border-transparent hover:border-gray-800 transition-all">
                <div className="aspect-[4/3] w-full bg-[#2b2b2c] relative overflow-hidden p-4 flex items-center justify-center">
                  {cert.image ? (
                     // eslint-disable-next-line @next/next/no-img-element
                     <img 
                       src={cert.image} 
                       alt={cert.title}
                       className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                     />
                  ) : (
                     <Award className="text-gray-600 w-20 h-20 opacity-20" />
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-[#2b2b2c] p-3 rounded-xl hover:bg-blue-600 transition-colors">
                            <Eye className="text-blue-500 group-hover:text-white" size={24} />
                        </a>
                      )}
                  </div>
                </div>

                <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
          {certifications.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              <Award className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No certifications added yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
