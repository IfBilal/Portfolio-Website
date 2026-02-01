
import React from "react";
import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "M. BILAL TAHIR // MERN STACK ENGINEER",
  description: "Full-Stack Engineer specializing in high-performance MERN architectures, real-time bidirectional systems, and secure cloud orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${mono.variable} antialiased bg-[#050505] text-white selection:bg-[#2E5BFF]/30 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
