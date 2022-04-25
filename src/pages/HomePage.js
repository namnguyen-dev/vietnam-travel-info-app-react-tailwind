import React from 'react';
import {
  About,
  FeaturedTours,
  Hero,
  NewTours,
  PlacesToGo,
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
    </>
  );
};

export default HomePage;
