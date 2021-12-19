import React from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import { Markdown } from "../markdown";
import type { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="dark:bg-dark dark:text-white">
      <Header />

      <main>
        <Markdown>{children}</Markdown>
      </main>

      <Footer />
    </section>
  );
};

// eslint-disable-next-line import/no-default-export
export default Layout;
