import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions'
import { Toaster } from "sonner";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



export const metadata: Metadata = {
  title: "Deepraj || Software-Developer",
  description: "A Perfect Portfolio",
};

const inter = Inter({subsets: ["latin"],
   weight: ["400","500","600","700","800","900"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ViewTransitions>
    <html lang="en" >
      <body className={`antialiased relative min-h-screen w-full [--pattern-fg:var(--color-gray-950)]/5 bg-neutral-50 dark:bg-neutral-700 ${inter.className}`}
      suppressHydrationWarning
      >
     <Toaster position="top-center"/>
          <Navbar />
          {children}
        <Footer />
      </body>
    </html>
    </ViewTransitions>
  );
}
