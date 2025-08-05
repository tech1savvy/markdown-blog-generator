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
}).slice(0, 6);

const BlogList = () => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-12">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: BlogType, index: number) => (
          <div key={index} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl p-6">
            <p className="text-2xl font-bold mb-3 leading-tight">{blog.title}</p>
            <p className="text-muted-foreground mb-4 line-clamp-3">{blog.description}</p>
            <a
              href={`/blogpost/${blog.slug}.md`}
              className={buttonVariants({ variant: "default" })}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
