import React from "react";
import { Award, Star } from "lucide-react";

export function Courses() {
  const selections = [
    {
      id: 1,
      name: "NDA Preparation Program",
      image: "/public/image1.jpeg",
      description:
        "If you are dreaming of joining the Armed Forces after 12th, our NDA program gives you the right direction. We help students prepare for the written exam while also focusing on daily physical training and SSB interview practice. Our goal is to build discipline, confidence, and leadership qualities in every student.",
    },
    {
      id: 2,
      name: "Army Preparation Program",
      image: "/public/image2.jpeg",
      description:
        "Our Army coaching program is designed for students who want to serve the nation with pride. Along with exam preparation, we conduct regular physical practice sessions and personality development training so that students are ready for every stage of the selection process.",
    },
    {
      id: 3,
      name: "Air Force Entry Coaching",
      image: "/public/image3.jpeg",
      description:
        "For students aiming to join the Air Force, we provide complete academic support and physical guidance. We focus on improving reasoning skills, general awareness, and overall confidence so students can perform well in exams and interviews.",
    },
    {
      id: 4,
      name: "Navy Preparation Course",
      image: "/public/image4.jpeg",
      description:
        "Our Navy preparation course helps students understand both the academic and physical requirements of naval entry. Through regular practice, group activities, and guided training, we prepare students to face the challenges with confidence.",
    },
    {
      id: 5,
      name: "SSC & Police Coaching",
      image: "/public/image5.jpeg",
      description:
        "We offer focused preparation for SSC and Police recruitment exams. Students receive clear subject guidance, regular practice tests, and physical training support where required to meet exam standards.",
    },
    {
      id: 6,
      name: "CUET Preparation",
      image: "/public/image6.jpeg",
      description:
        "Our CUET program helps students prepare in a focused and organized way. With subject-wise guidance and regular assessments, we help students improve their performance step by step.",
    },
  ];

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-sky-700" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Comprehensive Defence Preparation
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building disciplined and confident defence aspirants.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selections.map((selection) => (
            <div
              key={selection.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={selection.image}
                  alt={selection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {selection.name}
                </h3>
                <div className="space-y-2">
                  <p>{selection.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
