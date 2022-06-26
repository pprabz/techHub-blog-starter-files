import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { SearchResultItemStyles } from '../../styles/search/SearchResultItemStyles';
import { Title } from '../Typography/Title';
import ParagraphText from '../Typography/ParagraphText';
import { SearchModalContext } from '../../context/SearchModalContext';

function BlogsSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/blogs/${blog.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        className="img"
      />
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="publishedAtText">
          {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategoriesSearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={closeSearchModal}
    >
      <Title>{category.title}</Title>
    </SearchResultItemStyles>
  );
}

export { BlogsSearchResultItem, CategoriesSearchResultItem };
