"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Providers from "./components/Theme";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#EDEDED] dark:bg-[#000000] text-[#1a1a1c] dark:text-[#EDEDED] w-screen h-screen">
        <AuthContextProvider>
          <Providers>
            <div>
              <Navbar />
            </div>
            {children}
          </Providers>
        </AuthContextProvider>
      </body>
    </html>
  );
}
