import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/Typography/ParagraphText';
import { SectionTitle } from '../components/Typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle>404</SectionTitle>
          <ParagraphText>
            The Page you are looking for is not found. <br /> Go Back to{' '}
            <Link to="/" className="link">
              Home Page
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}
export default NotFoundPage;
