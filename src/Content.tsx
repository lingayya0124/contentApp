/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useGetContent } from "./useGetContent";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import remarkMdx from "remark-mdx";
import remarkToc from "remark-toc";
import rehypeRaw from "rehype-raw";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import collapse from "remark-collapse";

import { unified } from "unified";
// import "./readme.md";
import {
  ActionIcon,
  Burger,
  Button,
  Container,
  Group,
  Menu,
  Popover,
  ScrollArea,
  Text,
} from "@mantine/core";
import TermsOfUse from "./readme.md";
import customToc from "./toc";
import slug from "remark-slug";
import { toc } from "mdast-util-toc";
import remarkRehype from "remark-rehype";
import rehypeToc from "rehype-toc";
import Toc from "./Toc";
import CustomMarkdown from "./CustomMarkdown";
import search from "./tocSearch";
function Content() {
  const content = useGetContent();
  const [tosText, setTosText] = useState("");
  // useEffect(() => {
  //   fetch(TermsOfUse)
  //     .then((res) => res.text())
  //     .then((text) => setTosText(text));
  // }, []);

  // useEffect(() => {
  //   async function generateTOC() {
  //     const file = await remark()
  //       .use(remarkRehype)
  //       .use(customToc, {
  //         tight: true,
  //         ordered: true,

  //         maxDepth: 5,
  //         // skip: "delta",
  //         parents: ["root", "listItem"],
  //         //   prefix: "user-content-",
  //       })
  //       .process(tosText);

  //     console.log(String(file));
  //   }

  //   generateTOC();
  // }, []);
  // console.log(content?.data?.markdown_content);
  const markdownContent = `
# Example Markdown Document

## Table of Contents
<!-- toc -->

## Section 1
Some content here...

## Section 2
More content...

<!-- tocstop -->
`;

  return (
    <Container>
      <Group>
        <Toc content={content?.data?.markdown_content} />
        <CustomMarkdown
          content={content?.data?.markdown_content.replace(
            /## Table of contents/gi,
            ""
          )}
        />
      </Group>
    </Container>
  );
}

export default Content;
