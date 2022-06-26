import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';

function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((author) => (
        <AuthorItem
          name={author.name}
          profileimage={author.profileimage}
          slug={author.slug}
        />
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;
