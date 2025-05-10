'use client'
import React, { useEffect } from 'react'
import Link from "next/link";
import Counter from "./components/Counter";
import { usePathname } from "next/navigation";

const listData = [
  { name: "About", path: "/dashboard/about" },  
  { name: "Settings", path: "/dashboard/settings" },
  { name: "Debounce", path: "/dashboard/debounce" },  
]; 
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathName = usePathname()
    useEffect(() => {
      console.log("Pathname :", pathName); 
    }, [pathName]);

    return (
      <div className="border-2 border-dashed border-white p-4 w-1/2 mx-auto">
        <div className="flex gap-8 font-bold text-lg mb-4 ">
          {
            listData.map((item) => (
              <Link
                key={item.path}
                className={pathName === item.path ? "text-purple-500" : ""}
                href={item.path}
              >
                {item.name}
              </Link>
            ))
          }
        </div>
        <Counter />
        {children}
      </div>
    );
  }
  