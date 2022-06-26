import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PageSpace from '../components/PageSpace';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles';
import SEO from '../components/SEO';
import { Title } from '../components/Typography/Title';
import MyPortableText from '../components/MyPortableText';
import BGrid from '../components/blogs/BGrid';

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileimage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title="Author" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <SingleAuthorStyles>
            <div className="author-header">
              <GatsbyImage
                image={author.profileimage.asset.gatsbyImageData}
                alt={author.profileimage.alt}
                className="profileImage"
              />
              <Title className="name">{author.name}</Title>
              <div className="bio">
                <MyPortableText value={author._rawBio} />
              </div>
            </div>
          </SingleAuthorStyles>
          <hr className="hr" />
          <BGrid blogs={blogs} />
        </div>
      </PageSpace>
    </>
  );
}

export default SingleAuthor;
