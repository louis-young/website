import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Code } from "../code";
import { preToCodeBlock } from "./utilities";
import type { MarkdownProps } from "./types";

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);

    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};

export const Markdown = ({ children }: MarkdownProps) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
