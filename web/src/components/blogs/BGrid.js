import React from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BItems from './BItems';

function BGrid({blogs}) {
  return (
    <BlogGridStyles>
        {blogs && 
          blogs.map((blog) => (
            <BItems 
              key={blog.id}
              title={blog.title} 
              path={blog.slug.current}
              categories={blog.categories}
              image={{
                imageData: blog.coverImage.asset.gatsbyImageData,
                altText: blog.coverImage.alt,
              }}
              publishedAt={blog.publishedAt}
            />
          ))
        }
    </BlogGridStyles>
  );
}

export default BGrid;