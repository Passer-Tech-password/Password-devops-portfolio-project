'use client';

import { useState } from 'react';
import { PortfolioData } from '@/lib/data';
import ProfileForm from './components/ProfileForm';
import JsonEditorForm from './components/JsonEditorForm';
import { saveResume, saveProjects, saveCertifications, saveBlog, logout } from '@/app/actions';
import { LogOut, User, FileText, Briefcase, BookOpen, Award } from 'lucide-react';

export default function AdminDashboard({ data }: { data: PortfolioData }) {
  const [activeTab, setActiveTab] = useState<'profile' | 'resume' | 'projects' | 'certifications' | 'blog'>('profile');

  return (
    <div className="min-h-screen bg-[#1e1e1f] text-white font-sans">
      <div className="bg-blue-900/50 border-b border-blue-800 px-4 py-2 text-center text-sm text-blue-200">
        ℹ️ <strong>Note:</strong> Changes saved here are committed to GitHub. Please allow 1-2 minutes for Vercel to rebuild and deploy your changes to the live site.
      </div>
      <nav className="bg-[#2b2b2c] border-b border-[#383838] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <form action={logout}>
                <button type="submit" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <LogOut size={16} />
                    Logout
                </button>
            </form>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-[#2b2b2c] rounded-2xl p-4 border border-[#383838] sticky top-24">
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'profile' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-[#383838] hover:text-white'}`}
                >
                  <User size={18} />
                  Profile
                </button>
                <button 
                  onClick={() => setActiveTab('resume')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'resume' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-[#383838] hover:text-white'}`}
                >
                  <FileText size={18} />
                  Resume & Skills
                </button>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-[#383838] hover:text-white'}`}
                >
                  <Briefcase size={18} />
                  Portfolio Projects
                </button>
                <button 
                  onClick={() => setActiveTab('certifications')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'certifications' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-[#383838] hover:text-white'}`}
                >
                  <Award size={18} />
                  Certifications
                </button>
                <button 
                  onClick={() => setActiveTab('blog')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'blog' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-[#383838] hover:text-white'}`}
                >
                  <BookOpen size={18} />
                  Blog Posts
                </button>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ProfileForm data={data.profile} />
              </div>
            )}
            
            {activeTab === 'resume' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <JsonEditorForm 
                    title="Resume & Skills Configuration" 
                    data={data.resume} 
                    action={saveResume} 
                  />
               </div>
            )}

            {activeTab === 'projects' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <JsonEditorForm 
                    title="Portfolio Projects" 
                    data={data.projects} 
                    action={saveProjects} 
                  />
               </div>
            )}

            {activeTab === 'certifications' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <JsonEditorForm 
                    title="Certifications" 
                    data={data.certifications} 
                    action={saveCertifications} 
                  />
               </div>
            )}

            {activeTab === 'blog' && (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <JsonEditorForm 
                    title="Blog Posts" 
                    data={data.blog} 
                    action={saveBlog} 
                  />
               </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
