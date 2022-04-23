import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Card from "../components/card";
const shortcodes = { Card };

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;
  console.log("body", body);
  return (
    <>
      <button className="btn btn-secondary">{title}</button>
      <MDXRenderer components={shortcodes}>{body}</MDXRenderer>
    </>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`;
