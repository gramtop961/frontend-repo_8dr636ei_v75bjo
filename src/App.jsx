import React from 'react';
import Hero from './components/Hero';
import Accommodations from './components/Accommodations';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Accommodations />
      <Experiences />
      <Footer />
    </div>
  );
}
