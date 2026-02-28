import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section id='home' className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Train for the{' '}
                <span className="text-sky-700">Indian Defence Forces</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Join Kuchaman Defence Academy and prepare for NDA, NAVY, and AIRFORCE with disciplined training, expert guidance, and proven results.
              </p>
            </div>

            {/* Search Bar */}
            {/* <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Training Programs"
                  className="w-full pl-12 pr-4 py-3.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3.5 rounded-lg font-semibold whitespace-nowrap">
                Search
              </Button>
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
           <a href="#courses" className='w-full'>
               <Button
                variant="outline"
                className="border-2 border-sky-700 text-sky-700 hover:bg-green-50 px-8 py-6 rounded-lg font-semibold text-lg w-full"
              >
                View All Programs
              </Button>
           </a>
              <Button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-6 rounded-lg font-semibold text-lg bg-slate-800 hover:bg-slate-900">
                Join Academy
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/heroImage.jpeg"
                alt="Defence Training"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-green-700/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
