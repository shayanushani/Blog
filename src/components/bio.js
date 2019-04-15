/* eslint-disable quotes */
/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";

const bioQuery = graphql`
  query BioQuery {
    avatar: allFile(filter: { absolutePath: { regex: "/\/content\/assets\/authors/" } }) {
      nodes {
        base,
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

function Bio({ author }) {
  if (!author) {
    return null;
  }
  const { name, twitter, avatar } = author;
  // todo: this needs to be broken up better
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const currentAuthorsImage = data.avatar.nodes.find(a => a.base === avatar);
        return (
          <div
            style={{
              display: "flex",
              marginBottom: rhythm(2.5),
            }}
          >
            { currentAuthorsImage && (
              <Image
                fixed={currentAuthorsImage.childImageSharp.fixed}
                alt={name}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: "100%",
                }}
                imgStyle={{
                  borderRadius: "50%",
                }}
              />
            )}
            <p>
            Written by &nbsp;
              <strong>{name}</strong>
              &nbsp;
              {twitter && <a href={`https://twitter.com/${twitter}`}>Find them on twitter</a>}
            </p>
          </div>
        );
      }}
    />
  );
}

export default Bio;
