"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useState, useEffect } from "react";

interface LinkType {
  id: string;
  text: string;
}

const OnThisPage = ({
  htmlcontent,
  className,
}: {
  htmlcontent: string;
  className: string;
}) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);
  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlcontent;

    const headings = temp.querySelectorAll("h2");
    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;

      generatedLinks.push({
        id: id,
        text: (heading as HTMLElement).innerText,
      });
    });

    setLinks(generatedLinks);
  }, [htmlcontent]);

  return (
    <div className={cn("hidden md:block", className)}>
      <div className="sticky top-20">
        <h2>On This Page</h2>
        <ul className="not-prose text-xs">
          {links &&
            links.map((link) => {
              return (
                <li key={link.id} className="pt-1">
                  <a href={`#${link.id}`}>
                    {link.text.slice(0, 30)}
                    {link.text.length > 30 ? "..." : null}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
