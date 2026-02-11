import { Mail, MapPin, Download, Github, Linkedin, Twitter, Facebook, Globe, Youtube } from "lucide-react";
import { PortfolioData } from "@/lib/data";

const TikTokIcon = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
    </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);

export default function ProfileHeader({ profile }: { profile: PortfolioData['profile'] }) {
  if (!profile) return null;
  
  return (
    <div className="relative w-full bg-[#1e1e1f] rounded-3xl border border-[#383838] shadow-2xl overflow-hidden mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Decorative Gradient Blob (Top Left) */}
      <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-[60px] opacity-30 pointer-events-none"></div>

      <div className="p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-center lg:items-start relative z-10">
        {/* Avatar Section */}
        <div className="relative group">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden bg-[#2b2b2c] shadow-2xl border-2 border-[#383838] group-hover:border-blue-500/50 transition-all duration-300">
            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
               {profile.avatar && profile.avatar !== "/avatar.png" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
               ) : (
                  <span className="text-4xl font-bold text-gray-700">{profile.name.split(' ').map(n => n[0]).join('')}</span>
               )}
            </div>
          </div>
        </div>

        {/* Main Info Section */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{profile.name}</h1>
            <p className="text-gray-400 mt-2 bg-[#2b2b2c] px-4 py-1.5 rounded-lg inline-block text-sm font-medium border border-[#383838]">
              {profile.role}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-5 pt-2">
               {profile.social.facebook && (
                 <a href={profile.social.facebook} className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <Facebook size={20} />
                 </a>
               )}
               {profile.social.twitter && (
                 <a href={profile.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <Twitter size={20} />
                 </a>
               )}
               {profile.social.linkedin && (
                 <a href={profile.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <Linkedin size={20} />
                 </a>
               )}
               {profile.social.github && (
                 <a href={profile.social.github} className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <Github size={20} />
                 </a>
               )}
               {profile.social.tiktok && (
                 <a href={profile.social.tiktok} className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <TikTokIcon size={20} />
                 </a>
               )}
               {profile.social.youtube && (
                 <a href={profile.social.youtube} className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <Youtube size={20} />
                 </a>
               )}
               {profile.social.whatsapp && (
                 <a href={profile.social.whatsapp} className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <WhatsAppIcon size={20} />
                 </a>
               )}
               {profile.social.telegram && (
                 <a href={profile.social.telegram} className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                   <TelegramIcon size={20} />
                 </a>
               )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#383838] w-full" />

      {/* Details Grid */}
      <div className="p-8 bg-[#1e1e1f]/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            
            {/* Email */}
            <div className="flex flex-col gap-1 group">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-blue-400 transition-colors">Email</span>
                <a href={`mailto:${profile.email}`} className="text-white hover:text-blue-400 transition-colors truncate font-medium flex items-center gap-2">
                    {profile.email}
                    <Mail size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1 group">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-blue-400 transition-colors">Location</span>
                <div className="text-white font-medium flex items-center gap-2">
                    {profile.location}
                    <MapPin size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>
            </div>

            {/* CV */}
            <div className="flex flex-col gap-1 group">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-blue-400 transition-colors">CV</span>
                <a href={profile.cvLink} className="text-white hover:text-blue-400 transition-colors font-medium flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                    Download
                    <Download size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                </a>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1 group">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-blue-400 transition-colors">Status</span>
                <div className="text-white font-medium flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Available for work 🍉
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
