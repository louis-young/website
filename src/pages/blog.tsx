import React from "react";
import { graphql } from "gatsby";
import { truncate } from "../utilities/truncate";
import { Meta } from "../components/meta";
import { Post } from "../components/post";
import { Container } from "../components/container";

interface BlogPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const BlogPage = ({ data }: BlogPageProps) => {
  const posts = data.allMdx.nodes;

  return (
    <>
      <Meta />

      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mt-6 mb-32">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {posts.map((post: any) => {
            return (
              <Post
                key={post.fields.slug}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                link={post.fields.slug}
                excerpt={truncate(post.frontmatter.description)}
              />
            );
          })}
        </section>
      </Container>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 165)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

// eslint-disable-next-line import/no-default-export
export default BlogPage;
