import React from 'react';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Title } from '../components/Typography/Title';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import ParagraphText from './Typography/ParagraphText';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import sanityConfig from '../../sanity-config';
import { getSanityImageData } from '../utils/getSanityImageData';
import { GatsbyImage } from 'gatsby-plugin-image';

const MyPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter 
        style={theme}
        language={value.code.language}
        className="bodyCode">
        {String(value.code.code).replace(/\n$/,'')}
      </SyntaxHighlighter>
    ),
    
    customImage: ({ value }) => {
      const imageData = getImage(value.asset,sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url:imageData.url,
        height,
        width,
      };
      const gatsbyImageData = getSanityImageData({image, layout: 'constrained', });
      return (
        <GatsbyImage image={gatsbyImageData} alt={value.alt} className="bodyImage" />
      )
    },
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={MyPortableTextComponents} />;
}

export default MyPortableText;
