/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
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
import { IconList } from "@tabler/icons-react";
import { unified } from "unified";
// import "./readme.md";
import {
  ActionIcon,
  Badge,
  Box,
  Burger,
  Button,
  Container,
  Group,
  Menu,
  Paper,
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
import { debounce } from "lodash";
import FilterInput from "./FilterInput";

function Toc(props) {
  const [opened, setOpened] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const { content } = props;
  useEffect(() => {
    setSearch("");
  }, [opened]);
  const debouncedSearch = debounce((filterValue) => {
    setSearch(filterValue);
  }, 500);

  useEffect(() => {
    debouncedSearch(inputRef.current);
    return () => {
      debouncedSearch.cancel();
    };
  }, []);
  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={400}
      position="bottom-start"
      shadow="md"
    >
      <Popover.Target>
        <ActionIcon>
          <IconList
            size={25}
            onClick={() => {
              setOpened(!opened);
            }}
          ></IconList>
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        <Paper shadow="sm" radius="md" p="md" withBorder>
          <FilterInput
            onUpdate={(val) => {
              inputRef.current = val;
              debouncedSearch(val);
            }}
          />
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
                      expression: search,
                      maxDepth: 5,
                      parents: ["root", "listItem"],
                    },
                  ],
                ]}
              />
            </Group>
          </ScrollArea.Autosize>
        </Paper>
      </Popover.Dropdown>
    </Popover>
  );
}

export default Toc;
