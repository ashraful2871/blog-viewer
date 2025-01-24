"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Blog-Viewer",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <KindeProvider>
      <html lang="en">
        <body className="max-w-[1320px] mx-auto p-3 my-">
          <Navbar></Navbar>
          <div className="min-h-screen"> {children}</div>
        </body>
      </html>
    </KindeProvider>
  );
}
