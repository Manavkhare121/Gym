import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrainingSection } from './components/TrainingSection';
import { TrainerSection } from './components/TrainerSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { TeamSection } from './components/TeamSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="fitzone-app">
      <Navbar />
      <main>
        <Hero />
        <TrainingSection />
        <TrainerSection />
        <ActivitiesSection />
        <TeamSection />
        <PricingSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
