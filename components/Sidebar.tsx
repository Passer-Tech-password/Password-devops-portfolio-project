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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-10 w-full md:w-24 bg-[#1e1e1f] border border-[#383838] rounded-3xl p-4 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 shadow-lg z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full md:w-20 h-20 rounded-2xl transition-all duration-300 group ${
              isActive
                ? "text-white bg-blue-600 shadow-blue-500/20 shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-[#2b2b2c]"
            }`}
          >
            <item.icon className="w-6 h-6 mb-2" />
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
}
