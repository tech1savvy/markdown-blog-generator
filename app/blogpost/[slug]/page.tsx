import SiteConfig from "@/config/site";
import { Metadata } from "next";
import { readFileSync } from "fs";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

import { unified } from "unified";
import remarkParse from "remark-parse";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
// import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
// import rehypeHighlight from "rehype-highlight";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import matter from "gray-matter";

import rehypeSlug from "rehype-slug";
import OnThisPage from "@/components/OnThisPage";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

type Props = {
  params: { slug: string; title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const filePath = `content/${params.slug}`;
  const fileContent = readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  return {
    title: `${data.title} - ${SiteConfig.title}`,
    description: data.description,
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeAutolinkHeadings)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "material-theme-palenight",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const filePath = `content/${params.slug}`;
  const fileContent = readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlcontent = (await processor.process(content)).toString();

  return (
    <div>
      <MaxWidthWrapper className="prose dark:prose-invert">
        <div className="flex">
          <div className="px-16">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlcontent }}></div>
          </div>
          <OnThisPage className="text-sm w-[50%]" htmlcontent={htmlcontent} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
