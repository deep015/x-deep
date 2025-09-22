import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ViewTransitions } from 'next-view-transitions'
import Footer from "./components/navbar/footer";
import { Toaster } from "sonner";



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
        <Toaster position="top-center"/>
          <Navbar />
  
        {children}

       <Footer />
      </body>
    </html>
    </ViewTransitions>
  );
}
