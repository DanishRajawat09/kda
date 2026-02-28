import React from 'react';
import { Trophy, Users, Award, GraduationCap } from 'lucide-react';

export function ExcellenceSection() {
  const stats = [
    {
      id: 1,
      icon: Trophy,
      value: '12+',
      label: 'Years of Training',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      id: 2,
      icon: Users,
      value: '5000+',
      label: 'Trainees',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      icon: Award,
      value: '850+',
      label: 'Defence Selections',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50',
    },
    {
      id: 4,
      icon: GraduationCap,
      value: '1,00,000+',
      label: 'Students Enrolled',
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Proven Record of Excellence
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Kuchaman Defence Academy has consistently delivered outstanding results in defence exam preparations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className={`text-4xl lg:text-5xl font-bold ${stat.color}`}>
                    {stat.value}
                  </h3>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-700 text-lg font-medium">
            Trusted by thousands of defence aspirants across India
          </p>
        </div>
      </div>
    </section>
  );
}
