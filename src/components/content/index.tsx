import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styles from "./styles.module.css";
import type { ContentProps } from "./types";

export const Content = ({ content }: ContentProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.markdown}>
        <MDXRenderer>{content}</MDXRenderer>
      </div>
    </div>
  );
};
