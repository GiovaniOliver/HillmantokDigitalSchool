import React from 'react';
import { Hero } from '../components/Hero';  // correct path
import { Features } from '../components/Features'; // correct path
import { Footer } from '../components/Footer'; // correct path

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage; 