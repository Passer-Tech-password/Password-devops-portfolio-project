"use client";

import { User, FileText, Box, Book, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: User, label: "ABOUT", href: "/" },
  { icon: FileText, label: "RESUME", href: "/resume" },
  { icon: Box, label: "PORTFOLIO", href: "/portfolio" },
  { icon: Book, label: "BLOG", href: "/blog" },
  { icon: Phone, label: "CONTACT", href: "/contact" },
];

export default function Sidebar({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={`sticky top-4 lg:top-10 z-50 w-full lg:w-24 bg-[#1e1e1f] border border-[#383838] rounded-2xl lg:rounded-3xl p-2 lg:p-4 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-2 lg:gap-4 shadow-lg backdrop-blur-md bg-opacity-90 ${className}`}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full lg:w-20 h-16 lg:h-20 rounded-xl lg:rounded-2xl transition-all duration-300 group ${
              isActive
                ? "text-white bg-blue-600 shadow-blue-500/20 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-[#2b2b2c]"
            }`}
          >
            <item.icon className="w-5 h-5 lg:w-6 lg:h-6 mb-1 lg:mb-2" />
            <span className="text-[9px] lg:text-[10px] font-medium tracking-wide">{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
}
