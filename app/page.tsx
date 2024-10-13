"use client";

import SiteConfig from "@/config/site";
import { Metadata } from "next";
import { useEffect, useRef } from "react";

import Typed from "typed.js";

// export const metadata: Metadata = {
//   title: SiteConfig.title,
//   description: SiteConfig.description,
// };

export default function Home() {
  // Typed Effect
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
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="p-4">
      <span>Welcome to learn about: </span>
      <span ref={el} />
    </main>
  );
}
