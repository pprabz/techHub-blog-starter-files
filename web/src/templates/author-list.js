import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import AuthorGrid from '../components/authors/AuthorGrid';
import Pagination from '../components/Pagination';

export const AuthorQuery = graphql`
  query authorsQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileimage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const authors = data.allSanityAuthor.nodes;
  return (
    <>
      <SEO title="Authors" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Authors"
            description="Displaying the details about the Authors and their posts"
          />
          <AuthorGrid authors={authors} />
          {numberOfPages > 1 && (
            <Pagination
              baseURL="/authors"
              currentPage={currentPage}
              numberOfPages={numberOfPages}
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default AuthorList;
