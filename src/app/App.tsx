import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

import { ExcellenceSection } from './components/ExcellenceSection';
import { RegistrationSection } from './components/RegistrationSection';
import { TrainersSection } from './components/TrainersSection';
import { Footer } from './components/Footer';
import { Courses } from './components/Courses';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Courses />
      <ExcellenceSection />
      <RegistrationSection />
      <TrainersSection />
      <Footer />
    </div>
  );
}
