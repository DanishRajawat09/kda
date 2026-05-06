import React from 'react';
import {
  Home,
  UtensilsCrossed,
  Dumbbell,
  ClipboardCheck,
  Droplets,
  Camera,
  Users,
  Mic2,
  Target,
  Flame,
} from 'lucide-react';

export function FacilitiesSection() {
  const facilities = [
    {
      id: 1,
      icon: Home,
      title: 'Boys & Girls Separate Hostel',
      description: 'Comfortable and secure accommodation facilities',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      icon: UtensilsCrossed,
      title: 'Food Canteen',
      description: 'Nutritious and hygienic meals available',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
    },
    {
      id: 3,
      icon: Dumbbell,
      title: 'Exercise Ground',
      description: 'Well-equipped fitness and training facilities',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      id: 4,
      icon: ClipboardCheck,
      title: 'Regular Test Series',
      description: 'Comprehensive mock tests for evaluation',
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
    {
      id: 5,
      icon: Droplets,
      title: 'Laundry & Pure Water',
      description: 'Clean water and laundry facilities',
      color: 'text-cyan-700',
      bgColor: 'bg-cyan-50',
    },
    {
      id: 6,
      icon: Camera,
      title: 'CCTV Surveillance',
      description: '24/7 monitoring for safety and security',
      color: 'text-red-700',
      bgColor: 'bg-red-50',
    },
    {
      id: 7,
      icon: Users,
      title: 'Qualified & Experienced Staff',
      description: 'Expert faculty with proven track records',
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 8,
      icon: Mic2,
      title: 'Motivational Speakers',
      description: 'Regular sessions to boost confidence',
      color: 'text-rose-700',
      bgColor: 'bg-rose-50',
    },
    {
      id: 9,
      icon: Target,
      title: 'Healthy Competitive Environment',
      description: 'Fostering growth through positive competition',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 10,
      icon: Flame,
      title: 'Discipline, Dedication, Determination',
      description: 'Core values instilled in every student',
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Kuchaman Defence Academy provides comprehensive facilities designed to support and accelerate your defence exam preparation journey
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${facility.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${facility.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base lg:text-lg font-bold text-slate-900 leading-tight">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-slate-600">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-md p-8">
          <p className="text-slate-700 text-lg font-medium">
            Our state-of-the-art infrastructure ensures <span className="text-sky-700 font-bold">optimal learning conditions</span> for every aspirant
          </p>
        </div>
      </div>
    </section>
  );
}
