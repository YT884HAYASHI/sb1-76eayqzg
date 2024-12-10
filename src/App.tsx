import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solutions } from './components/Solutions';
import { ValueProposition } from './components/ValueProposition';
import { Features } from './components/Features';
import { Timeline } from './components/Timeline';
import { CompanyInfo } from './components/CompanyInfo';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <ValueProposition />
        <Features />
        <Timeline />
        <CompanyInfo />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;