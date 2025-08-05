"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { ModeToggle } from "./theme-toogle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [pathname]);

  useEffect(() => {
    setProgress(0);
  }, []);

  return (
    <nav className="z-10 h-16 bg-background/40 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between">
      <LoadingBar
        color="#188080"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="text-lg font-bold md:text-xl">
        <Link href={"/"}>🪸 Binary Biome</Link>
      </div>
      <ul className="hidden md:flex w-full justify-end items-center space-x-4 ">
        <li>
          <Link href={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        
      </ul>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <Menu className="md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
