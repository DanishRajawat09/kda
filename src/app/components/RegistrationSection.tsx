import React from 'react';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

export function RegistrationSection() {
  const benefits = [
    'Expert faculty with defence background',
    'Comprehensive study material',
    'Regular mock tests and assessments',
    'Physical fitness training included',
  ];

  return (
    <section id='registration' className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                For Preparation, Please Register
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kuchaman Defence Academy provides disciplined training for NDA, CDS, and AFCAT with experienced trainers and structured programs.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sky-700 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-6 rounded-lg font-semibold text-lg shadow-lg">
                Student Registration
              </Button>
             <a href="#courses">
               <Button
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-lg font-semibold text-lg"
              >
                View Training Programs
              </Button>
             </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/registrationSec.jpeg"
                alt="Defence Training Programs"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-700 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">100% Job Oriented</p>
                  <p className="text-sm text-slate-600">Structured Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
