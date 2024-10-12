import React from "react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { readFileSync } from "fs";

import { unified } from "unified";
import remarkParse from "remark-parse";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
// import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
// import rehypeHighlight from "rehype-highlight";

import matter from "gray-matter";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);

  const filePath = `content/${params.slug}`;
  const fileContent = readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlcontent = (await processor.process(content)).toString();

  return (
    <div>
      <MaxWidthWrapper className="prose dark:prose-invert">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlcontent }}></div>
      </MaxWidthWrapper>
    </div>
  );
}
