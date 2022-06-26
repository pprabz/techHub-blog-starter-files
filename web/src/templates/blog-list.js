import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import BGrid from '../components/blogs/BGrid';
import Pagination from '../components/Pagination';


export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!){
    allSanityBlog(
      sort: { fields: publishedAt, order:DESC }
      limit: $limit
      skip: $offset
    ){
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

function BlogList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext; 
  const blogs = data.allSanityBlog.nodes;  
  return (
    <>
      <SEO title="Blogs" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader title="All Blog Posts" description="This is the page to display all the blog posts" />
          <BGrid blogs={blogs} />
          {numberOfPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                baseURL="/blogs" />
          )}
      </div>
      </PageSpace>
    </>
  )
}

export default BlogList;