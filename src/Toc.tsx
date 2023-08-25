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
  TextInput,
} from "@mantine/core";
import TermsOfUse from "./readme.md";
import customToc from "./toc";
import slug from "remark-slug";
import { toc } from "mdast-util-toc";
import remarkRehype from "remark-rehype";
import "./Toc.css";
import rehypeToc from "rehype-toc";

function Toc(props) {
  const [opened, setOpened] = useState(false);
  const { content } = props;
  return (
    <Popover
      // styles={{
      //   dropdown: {
      //     position: "fixed",
      //     // top: "50%",
      //     // left: "50%",
      //     // transform: "translate(-50%, -50%)",
      //     // zIndex: 9999,
      //   },
      // }}
      opened={opened}
      onChange={setOpened}
      width={400}
      position="bottom-start"
      withArrow
      shadow="md"
    >
      <Popover.Target>
        <ActionIcon>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        {/* <TextInput placeholder="Filter Headings" /> */}
        <ScrollArea.Autosize
          ml={0}
          className="toc"
          mah={300}
          maw={400}
          mx="auto"
        >
          <Group>
            <ReactMarkdown
              children={content}
              remarkPlugins={[
                remarkGfm,
                remarkSlug,
                [
                  customToc,
                  {
                    tight: true,
                    // ordered: true,
                    filterValue: "sfsdfsd",
                    maxDepth: 5,
                    // skip: "delta",
                    parents: ["root", "listItem"],
                    //   prefix: "user-content-",
                  },
                ],
              ]}
            />
          </Group>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}

export default Toc;