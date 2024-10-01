"use client";

import { Montserrat_Alternates } from "next/font/google";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import "./../../src/app/globals.css";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isTsinyPage = pathname === "/tsiny";

  return (
    <>
      <Header />
      <main
        className={cn(
          `relative grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-5 auto-rows-min overflow-x-clip`,
          {
            "bg-[#F4F6FC]": isTsinyPage,
            "bg-white": !isTsinyPage,
          }
        )}
      >
        {children}
        <Toaster />
      </main>
      <Footer />
    </>
  );
}
