/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-toc').Options} Options
 */

import { toc } from "mdast-util-toc";
import search from "./tocSearch";

/**
 * Plugin to generate a Table of Contents (TOC).
 *
 * @type {import('unified').Plugin<[Options?]|void[], Root>}
 */
export default function customToc(options = {}) {

  return (node) => {
    console.log(node)

    const result = toc(
      node,
      Object.assign({}, options, {
        heading: options.heading || "toc|table[ -]of[ -]contents?"
      })
      );
      
      if (
        result.endIndex === null ||
        result.index === null ||
        result.index === -1 ||
        !result.map
        ) {
          return;
        }
        else{
          if (options.expression !=='') {
            const expression = new RegExp(options.expression, "i")
            console.log(expression)
            console.log(result.map)
            const s=search({...result?.map}, expression, {})
            console.log(s)
            if (s.children.length==0) {
              node.children = [];
            }
            else{
  
              node.children=[{children:s.children,ordered
                : 
                false,
                spread
                : 
                false,
                type
                : 
                "list"}]
              console.log(node)
            }
          } else {
            console.log(result)
            node.children = [result.map];
          }
        
        }  
      };
      
    }
    