// Import statements
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

/**
 * Search a node for a toc.
 *
 * @param {Nodes} root
 * @param {RegExp | undefined} expression
 * @param {SearchOptions} settings
 * @returns {SearchResult}
 */
export default function search(root, expression) {
  const result = {
    type: "list",
    ordered: false,
    spread: false,
    children: []
  };

  let isFound = false;

  visit(root, "listItem", function (node) {
    const headingNode = node.children[0].children[0];
    if (headingNode && headingNode.type === "link") {
      const value = toString(headingNode.children[0]);
      if (expression.test(value)) {
        result.children.push(node);
        isFound = true;
      }
    }
  });

  if (!isFound) {
    result.children = [];
  }

  return result;
}