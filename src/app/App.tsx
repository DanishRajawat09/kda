import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

import { ExcellenceSection } from './components/ExcellenceSection';
import { RegistrationSection } from './components/RegistrationSection';
import { TrainersSection } from './components/TrainersSection';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TopAdmissionSection } from './components/TopAdmissionSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { Courses } from './components/Courses';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Courses />
      <ExcellenceSection />
      <FacilitiesSection />
      <TopAdmissionSection />
      <RegistrationSection />
      {/* <TrainersSection /> */}
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
