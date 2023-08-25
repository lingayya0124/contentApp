/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-toc').Options} Options
 */

import { toc } from "mdast-util-toc";

/**
 * Plugin to generate a Table of Contents (TOC).
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export default function customToc(options = {}) {
  return (node) => {
    console.log(node);
    const result = toc(
      node,
      Object.assign({}, options, {
        heading: options.heading || "toc|table[ -]of[ -]contents?"
      })
    );
    console.log(result);
    if (
      result.endIndex === null ||
      result.index === null ||
      result.index === -1 ||
      !result.map
    ) {
      return;
    }

    node.children = [result.map];
  };
}
