import React from "react";
import { useGetContent } from "./useGetContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import remarkMdx from "remark-mdx";
import remarkToc from "remark-toc";
import rehypeRaw from "rehype-raw";
import { Container, Group, Text } from "@mantine/core";
function Content() {
  const content = useGetContent();
  console.log(content);

  return (
    <Group>
      <Text align="left">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={content?.data?.markdown_content}
          remarkPlugins={[remarkGfm, remarkToc]}
        />
      </Text>
    </Group>
  );
}

export default Content;
