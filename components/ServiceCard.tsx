import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-[#212123] border border-[#383838] p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-[#2b2b2c] transition-colors shadow-md h-full">
      <div className="text-blue-500 mb-2">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
