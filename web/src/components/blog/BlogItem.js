import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { GatsbyImage } from 'gatsby-plugin-image';
import BlogItemsStyles from '../../styles/blog/BlogItemStyles';
import ParagraphText from '../Typography/ParagraphText';
import { Title } from '../Typography/Title';

function BlogItem({ title, path, image, publishedAt, categories }) {
  return (
    <BlogItemsStyles>
      <Link to={`/blogs/${path}`}>
        <GatsbyImage
          image={image.imageData}
          alt={image.altText}
          className="img"
        />
      </Link>
      <Link to={`/blogs/${path}`}>
        <Title>{title}</Title>
      </Link>
      {publishedAt && (
        <ParagraphText className="publishedAt">
          {format(new Date(publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      )}
      <ParagraphText className="categoriesText">
        {categories.map((item, index) => (
          <span key={item.slug.current}>
            <Link to={`/categories/${item.slug.current}`}>{item.title}</Link>
            {index < categories.length - 1 ? ', ' : ''}
          </span>
        ))}
      </ParagraphText>
    </BlogItemsStyles>
  );
}

export default BlogItem;
