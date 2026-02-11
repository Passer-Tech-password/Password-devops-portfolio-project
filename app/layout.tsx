import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ProfileHeader from "@/components/ProfileHeader";
import { getPortfolioData } from "@/lib/data";
import InfinityBackground from "@/components/InfinityBackground";
import GeometricBackground from "@/components/GeometricBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPortfolioData();
  const { profile } = data;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://password-devops-portfolio-project.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${profile.name} - ${profile.role}`,
      template: `%s | ${profile.name}`
    },
    description: `Portfolio of ${profile.name}, a ${profile.role} based in ${profile.location}.`,
    keywords: [profile.name, profile.role, "Portfolio", "DevOps", "Developer", "Software Engineer", "Web Development"],
    authors: [{ name: profile.name }],
    creator: profile.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      title: `${profile.name} - ${profile.role}`,
      description: `Check out the portfolio of ${profile.name}, a ${profile.role}.`,
      siteName: `${profile.name} Portfolio`,
      images: [
        {
          url: profile.avatar || '/og-image.jpg', // Fallback to a default OG image if avatar is missing
          width: 1200,
          height: 630,
          alt: `${profile.name} Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} - ${profile.role}`,
      description: `Portfolio of ${profile.name}, a ${profile.role}.`,
      images: [profile.avatar || '/og-image.jpg'],
      creator: "@" + (profile.social.twitter.split('/').pop() || ""),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getPortfolioData();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://password-devops-portfolio-project.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.profile.name,
    url: baseUrl,
    image: data.profile.avatar,
    sameAs: [
      data.profile.social.facebook,
      data.profile.social.twitter,
      data.profile.social.linkedin,
      data.profile.social.github,
    ].filter(Boolean),
    jobTitle: data.profile.role,
    description: `Portfolio of ${data.profile.name}, a ${data.profile.role} based in ${data.profile.location}.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.profile.location
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111111] text-white flex justify-center min-h-screen p-4 md:p-8 font-sans overflow-x-hidden selection:bg-blue-500/30`}
      >
        <GeometricBackground />
        <InfinityBackground />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar (Left) */}
          <Sidebar className="hidden lg:flex" />
          
          <div className="flex-1 flex flex-col min-w-0">
            <ProfileHeader profile={data.profile} />
            
            {/* Tablet/Mobile Sidebar (Below Header) */}
            <Sidebar className="lg:hidden mb-8" />

            <main className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 md:p-8 relative shadow-lg min-h-[500px]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
