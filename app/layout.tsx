import React from "react";
import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "M. BILAL TAHIR // COMMAND_SURFACE",
  description: "Next.js 15 High-Performance Engineering Portfolio. Dark Industrial Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} antialiased bg-[#050505] text-white selection:bg-[#2E5BFF]/30 overflow-x-hidden cursor-none`}>
        <ParticleBackground />
        <CustomCursor />
        <Sidebar />
        <div className="pl-[64px]">
          {children}
        </div>
        {/* The terminal is rendered in page.tsx to handle local state more easily if needed, 
            or it can stay here for global access. */}
      </body>
    </html>
  );
}