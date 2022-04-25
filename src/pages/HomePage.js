import React from 'react';
import {
  About,
  Blogs,
  Contact,
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
      <Contact />
    </>
  );
};

export default HomePage;
