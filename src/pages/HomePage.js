import React from 'react';
import {
  About,
  Blogs,
  FeaturedTours,
  Hero,
  NewTours,
  PlacesToGo,
  Promotion,
  Reviews,
  Services,
  TravelTips,
  WhyUs,
} from '../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedTours />
      <PlacesToGo />
      <NewTours />
      <Reviews />
      <Promotion />
      <Blogs />
      <TravelTips />
      <WhyUs />
    </>
  );
};

export default HomePage;
