import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
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

const NavBar = () => {
  return (
    <nav className="h-16 bg-background/40 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between">
      <div className="text-lg font-bold md:text-xl">
        <span>🪸 Binary Biome</span>
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
        <li className="buttons px-4 space-x-2">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign-up
          </Link>
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
