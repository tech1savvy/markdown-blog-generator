import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

interface BlogType {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const dirContent = readdirSync("content", "utf-8");

const blogs: BlogType[] = dirContent.map((file) => {
  const fileContent = readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  const value: BlogType = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    imageUrl:
      data.imageUrl ||
      "https://placehold.co/600x400/lightslategrey/lightslategrey",
  };
  return value;
});

const BlogList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-2">My Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: BlogType, index: number) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-top"
              src={blog.imageUrl}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <a
                href={`/blogpost/${blog.slug}.md`}
                className={buttonVariants({ variant: "default" })}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
