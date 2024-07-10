import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The E Shop",
  description: "You arrived. I bet this is what you are looking for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full my-14">{children}</div>
          <Toaster />
          <Footer />
        </main>
      </body>
    </html>
  );
}
