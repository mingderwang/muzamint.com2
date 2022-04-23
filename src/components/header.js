import { Link as GatsbyLink } from "gatsby";
import React from "react";

import { graphql, useStaticQuery } from "gatsby";
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_DATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export const Header = ({ siteTitle, siteDescription }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <iframe
        src="https://mars.nasa.gov/layout/embed/image/insightweather/"
        width="800"
        height="530"
        scrolling="no"
        frameborder="0"
      ></iframe>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
};
