import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import TopCategories from '../components/HomePage/TopCategories';
import FeaturedBlogs from '../components/HomePage/FeaturedBlogs';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO title="Home Page" description="This is Custom" />
    <HeroSection />
    <FeaturedBlogs />
    <TopCategories />
  </>
);

export default IndexPage;
