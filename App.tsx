
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductSection from './components/ProductSection.tsx';
import Features from './components/Features.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
