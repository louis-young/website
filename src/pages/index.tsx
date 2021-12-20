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

      <Container>
        <section>
          <article>
            <h1 className="py-14 md:py-20 text-2xl md:text-4xl font-medium max-w-lg">
              Helping businesses by creating beautiful software that solves real
              problems.
            </h1>
          </article>
        </section>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
