
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";



export const metadata: Metadata = {
  title: "Browse Courses",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <div className="flex">
        <div>
        <SideBar/>
        </div>
      <div >{children}</div>
    </div>

  );
}
