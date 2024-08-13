"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export default function Header() {
  return (
    <>
      <Menubar className="py-8 border-0 md:hidden">
        <MenubarMenu>
          <MenubarTrigger className="relative z-30 p-0 bg-transparent hover:bg-transparent text-gray-900">
            <div className="px-4 sm:pl-12">
              <Menu className="w-4 h-4" />
            </div>
          </MenubarTrigger>
          <MenubarContent className="fixed left-3 min-w-64">
            <div className="flex flex-col gap-4 text-[20px] text-gray-900">
              {[
                { name: "Послуги", link: "poslugy" },
                { name: "Питання", link: "pytannya" },
                { name: "Ціни", link: "tsiny" },
                { name: "Робота", link: "robota" },
              ].map((perk) => (
                <MenubarItem key={perk.link}>
                  <Link
                    className="hover:text-primary duration-150"
                    href={perk.link}
                    key={perk.link}
                  >
                    {perk.name}
                  </Link>
                </MenubarItem>
              ))}
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="hidden md:flex px-16 py-8 gap-5 items-center">
        <Link
          href="/"
          className="font-bold text-primary uppercase text-2xl hover:scale-110 hover:rotate-12 duration-150"
        >
          chisto
        </Link>
        {[
          { name: "Послуги", link: "poslugy" },
          { name: "Питання", link: "pytannya" },
          { name: "Ціни", link: "tsiny" },
          { name: "Робота", link: "robota" },
        ].map((perk) => (
          <Link
            className="font-regular text-gray-900 text-lg hover:text-primary duration-150"
            href={perk.link}
            key={perk.link}
          >
            {perk.name}
          </Link>
        ))}
      </div>
    </>
  );
}
