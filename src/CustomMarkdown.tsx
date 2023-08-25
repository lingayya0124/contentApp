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
import slug from "remark-slug";
import { toc } from "mdast-util-toc";
import remarkRehype from "remark-rehype";
import rehypeToc from "rehype-toc";
import "./CustomMarkdown.css";
function CustomMarkdown(props) {
  const { content } = props;
  return (
    <Container>
      <Group className="customMarkdown">
        {/* <MarkdownWithToc content={tosText} /> */}

        <Text align="left">
          <ReactMarkdown
            // rehypePlugins={[rehypeRaw]}
            children={content}
            remarkPlugins={[
              remarkGfm,
              remarkSlug,
              // [
              //   remarkToc,
              //   {
              //     // tight: true,
              //     // ordered: true,
              //     heading: "Content",
              //   },
              // ],
            ]}
          />
        </Text>
      </Group>
    </Container>
  );
}

export default CustomMarkdown;
