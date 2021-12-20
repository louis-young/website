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
        <section className="py-36 grid grid-cols-5 items-center gap-12">
          <article className="col-span-3">
            <h1 className="py-14 md:py-20 text-2xl md:text-4xl md:leading-normal font-medium max-w-lg ">
              Helping businesses by creating beautiful software that solves real
              problems.
            </h1>

            <button>View my work</button>
            <button>Speak with me</button>
          </article>

          <figure className="col-span-2">
            <img
              src="https://uploads-ssl.webflow.com/59f4614f2ce6d60001021fcd/5cd93e86cbc64f30d4eb6962_cagdasunal.png"
              alt="Louis Young"
            />
          </figure>
        </section>
      </Container>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default HomePage;
