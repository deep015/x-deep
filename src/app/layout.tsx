import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ViewTransitions } from 'next-view-transitions'



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

    <html lang="en"  >
      <body className={`antialiased min-h-screen w-full bg-neutral-200 dark:bg-neutral-700 ${inter.className}`}
      suppressHydrationWarning
      >
          <Navbar />
  
        {children}

       
      </body>
    </html>
    </ViewTransitions>
  );
}
