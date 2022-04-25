import React from 'react';
import {
  About,
  FeaturedTours,
  Hero,
  NewTours,
  PlacesToGo,
  Reviews,
  Services,
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
    </>
  );
};

export default HomePage;
