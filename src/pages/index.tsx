import React from "react";
import { graphql } from "gatsby";
import { truncate } from "../utilities/truncate";
import { Meta } from "../components/meta";
import { Post } from "../components/post";
import { Container } from "../components/container";

const HomePage = () => {
  return (
    <>
      <Meta />

      <section>
        <h1 className="py-14 md:py-20 text-center text-2xl md:text-4xl font-bold tracking-tight leading-normal md:leading-normal">
          Software development
        </h1>
      </section>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
