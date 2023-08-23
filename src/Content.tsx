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
import { unified } from "unified";
// import "./readme.md";
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Menu,
  Text,
} from "@mantine/core";
import TermsOfUse from "./readme.md";
function Content() {
  const content = useGetContent();
  //   console.log(content);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [tosText, setTosText] = useState("");
  useEffect(() => {
    fetch(TermsOfUse)
      .then((res) => res.text())
      .then((text) => setTosText(text));
  });
  async function main() {
    const file = await remark()
      .use(remarkParse)
      .use(remarkToc, { tight: true })
      .process(tosText);

    const processor = unified()
      .use(remarkParse)
      .use(remarkToc, {
        // tight: true,
        // ordered: true,
        maxDepth: 3,
        skip: "delta",
        parents: ["root", "listItem"],
      });

    const result = processor.processSync(tosText);
    //   setTocHtml(result.contents);
    console.log(result);
  }
  useEffect(() => {
    main();
  }, []);
  return (
    <Container>
      <Group>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Burger opened={burgerOpen}></Burger>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>

            <Menu.Item
            // icon={<IconSearch size={14} />}
            >
              {/* <div
              className="toc"
              dangerouslySetInnerHTML={{
                __html: processor.stringify(markdownAST.toc),
              }}
            /> */}
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
          </Menu.Dropdown>
        </Menu>

        <Text align="left">
          <ReactMarkdown
            // rehypePlugins={[rehypeRaw]}
            children={tosText}
            remarkPlugins={[
              //   remarkGfm,
              remarkSlug,
              [
                remarkToc,
                {
                  tight: true,
                  ordered: true,
                  heading: "contents",
                  maxDepth: 3,
                  skip: "delta",
                  parents: ["root", "listItem"],
                  //   prefix: "user-content-",
                },
              ],
            ]}
          />
        </Text>
      </Group>
    </Container>
  );
}

export default Content;
