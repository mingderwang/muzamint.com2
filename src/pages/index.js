import { graphql, Link as GatsbyLink } from "gatsby";
import React from "react";
import { Link } from "theme-ui";
import Layout from "../components/layout";

export default function IndexPage({ data }) {
  return (
    <>
      <Layout>
        {data.allMdx &&
          data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/shoes?w=400&h=225"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-end">
                  <Link as={GatsbyLink} to={`/${slug}`}>
                    <h2 className="card-title">{frontmatter.title}</h2>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`;
