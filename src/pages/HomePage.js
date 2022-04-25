import React from 'react';
import {
  About,
  FeaturedTours,
  Hero,
  NewTours,
  PlacesToGo,
  Promotion,
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
      <Promotion />
    </>
  );
};

export default HomePage;
