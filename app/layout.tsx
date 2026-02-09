import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ProfileHeader from "@/components/ProfileHeader";
import { getPortfolioData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clement Simeon Portfolio",
  description: "Portfolio of Clement Simeon",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getPortfolioData();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111111] text-white flex justify-center min-h-screen p-4 md:p-8 font-sans`}
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <ProfileHeader profile={data.profile} />
                <main className="bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 md:p-8 relative shadow-lg min-h-[500px]">
                    {children}
                </main>
            </div>
        </div>
      </body>
    </html>
  );
}
