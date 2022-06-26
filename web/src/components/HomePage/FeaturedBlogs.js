import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { FBlogStyles } from '../../styles/homePage/FBlogStyles';
import { SectionTitle } from '../Typography/Title';
import ParagraphText from '../Typography/ParagraphText';
import BGrid from '../blogs/BGrid';

//import { BlogGrid } from '../../components/blog/BlogGrid';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeature(filter: { _id: { eq: "featureItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
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
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const featuredBlogs = data.allSanityFeature.nodes[0].blogs;
  //console.log(featuredBlogs);
  return (
    <FBlogStyles>
      <SectionTitle>Featured Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </ParagraphText>
      <BGrid blogs={featuredBlogs}/>
    </FBlogStyles>
    
     
  );
}

export default FeaturedBlogs;
