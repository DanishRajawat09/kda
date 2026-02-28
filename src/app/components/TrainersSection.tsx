import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function TrainersSection() {
  const trainers = [
    {
      id: 1,
      name: 'Col. Rajesh Kumar',
      qualification: 'Ex-Indian Army Officer',
      specialization: 'NDA & SSB Expert',
      image: 'https://images.unsplash.com/photo-1615980215756-4d6069d4e872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG9mZmljZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NzUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Wg Cdr. Sanjay Verma',
      qualification: 'Ex-Air Force Officer',
      specialization: 'AFCAT & EKT Specialist',
      image: 'https://images.unsplash.com/photo-1615980215756-4d6069d4e872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG9mZmljZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NzUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Cdr. Amit Sharma',
      qualification: 'Ex-Navy Officer',
      specialization: 'CDS & Maritime Studies',
      image: 'https://images.unsplash.com/photo-1615980215756-4d6069d4e872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxpdGFyeSUyMG9mZmljZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA5NzUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-green-700" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Our Certified Trainers
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kuchaman Defence Academy trains you with certified trainers from Army, Navy, and Air Force
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Certified
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{trainer.name}</h3>
                <p className="text-sm text-green-700 font-semibold">{trainer.qualification}</p>
                <p className="text-slate-600">{trainer.specialization}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-md p-8">
          <p className="text-slate-700 text-lg">
            All our trainers are <span className="font-bold text-green-700">ex-defence officers</span> with proven track records in training defence aspirants
          </p>
        </div>
      </div>
    </section>
  );
}
