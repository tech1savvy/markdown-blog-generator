"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Programming",
        "HTML",
        "CSS",
        "JS",
        "Python",
        "C",
        "CPP",
        "Java",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to Binary Biome
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your one-stop destination for high-quality tutorials on{" "}
          <span ref={el} className="font-semibold text-primary" />
        </p>
        <div className="mt-8">
          <Link href="/blog" className={buttonVariants({ size: "lg" })}>
            Explore the Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
