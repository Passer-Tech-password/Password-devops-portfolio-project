import { Mail, MapPin, Download, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { PortfolioData } from "@/lib/data";

export default function ProfileHeader({ profile }: { profile: PortfolioData['profile'] }) {
  if (!profile) return null;
  
  return (
    <div className="relative w-full bg-[#1e1e1f] rounded-3xl border border-[#383838] p-8 mb-8 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-lg">
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-[#2b2b2c]">
          {/* Placeholder for avatar */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
             {profile.avatar && profile.avatar !== "/avatar.png" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
             ) : (
                <span className="text-4xl">{profile.name.split(' ').map(n => n[0]).join('')}</span>
             )}
          </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <h1 className="text-3xl font-bold text-white mb-2">{profile.name}</h1>
        <p className="text-gray-400 bg-[#2b2b2c] inline-block px-4 py-1 rounded-lg text-sm mb-6">
          {profile.role}
        </p>

        <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
             {profile.social.facebook && <a href={profile.social.facebook} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>}
             {profile.social.twitter && <a href={profile.social.twitter} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>}
             {profile.social.linkedin && <a href={profile.social.linkedin} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
             {profile.social.github && <a href={profile.social.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
        </div>
      </div>

      <div className="flex flex-col gap-4 min-w-[200px] border-t md:border-t-0 md:border-l border-[#383838] pt-6 md:pt-0 md:pl-8">
        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#2b2b2c] text-blue-500 shadow-md">
                <Mail size={18} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-sm text-white truncate max-w-[150px]">{profile.email}</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#2b2b2c] text-blue-500 shadow-md">
                <MapPin size={18} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase">Location</p>
                <p className="text-sm text-white">{profile.location}</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#2b2b2c] text-blue-500 shadow-md">
                <Download size={18} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase">CV</p>
                <a href={profile.cvLink} className="text-sm text-white hover:text-blue-500" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
        </div>
      </div>
    </div>
  );
}
