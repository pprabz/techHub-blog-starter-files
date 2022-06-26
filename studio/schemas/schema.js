/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom Schema:
import blog from './document/blog';
import author from './document/author';
import category from './document/category';

// Import Custom Objects:
import customimage from './objects/customimage';
import bodytext from './objects/custombodytext';
import customCode from './objects/customcode';
import excerptText from './objects/excerptText';
import features from './document/feature';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blog,
    author,
    category,
    features,
    customimage,
    bodytext,
    customCode,
    excerptText,
  ]),
});
