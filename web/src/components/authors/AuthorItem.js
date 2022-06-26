import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { AuthorItemStyles } from '../../styles/author/AuthorItemStyles';
import { Title } from '../Typography/Title';

function AuthorItem({ profileimage, name, slug }) {
  return (
    <AuthorItemStyles to={slug.current} className="author-item">
      <GatsbyImage
        image={profileimage.asset.gatsbyImageData}
        alt={profileimage.alt}
        className="profileImage"
      />
      <Title>{name}</Title>
    </AuthorItemStyles>
  );
}

export default AuthorItem;
