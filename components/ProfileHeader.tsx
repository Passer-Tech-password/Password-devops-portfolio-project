import Image from "next/image";
import { Mail, MapPin, Smartphone, Download, Github, Linkedin, Twitter, Facebook } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="relative w-full bg-[#1e1e1f] rounded-3xl border border-[#383838] p-8 mb-8 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-lg">
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-[#2b2b2c]">
          {/* Placeholder for avatar */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800">
             <span className="text-4xl">CS</span>
          </div>
          {/* <Image src="/avatar.png" alt="Avatar" layout="fill" objectFit="cover" /> */}
        </div>
      </div>

      <div className="flex-1 w-full">
        <h1 className="text-3xl font-bold text-white mb-2">Clement Simeon</h1>
        <p className="text-gray-400 bg-[#2b2b2c] inline-block px-4 py-1 rounded-lg text-sm mb-6">
          DevOps | SRE | Cloud Engineer
        </p>

        <div className="flex flex-wrap gap-4 md:gap-8 mb-6">
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
        </div>
      </div>

      <div className="flex flex-col gap-4 min-w-[200px] border-t md:border-t-0 md:border-l border-[#383838] pt-6 md:pt-0 md:pl-8">
        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#2b2b2c] text-blue-500 shadow-md">
                <Mail size={18} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-sm text-white truncate max-w-[150px]">clement@example.com</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#2b2b2c] text-blue-500 shadow-md">
                <MapPin size={18} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase">Location</p>
                <p className="text-sm text-white">Lagos, Nigeria</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-[#2b2b2c] text-blue-500 shadow-md">
                <Download size={18} />
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase">CV</p>
                <a href="#" className="text-sm text-white hover:text-blue-500">Download</a>
            </div>
        </div>
      </div>
    </div>
  );
}
