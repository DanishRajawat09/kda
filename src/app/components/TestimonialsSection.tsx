import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Star, MessageCircle } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Singh",
      role: "NDA Qualified Aspirant",
      rating: 5,
      text: "The training at Kuchaman Defence Academy was exceptional. The experienced instructors guided me through every step of my NDA preparation. I got selected in my first attempt!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlIHBvcnRyYWl0fGVufDB8fHx8fDE3NzA5NzUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "AFCAT Successful",
      rating: 5,
      text: "I was struggling with time management and strategy. The academy's coaching made everything clear. The mentors are genuinely invested in student success.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUgcG9ydHJhaXR8ZW58MHx8fHx8MTc3MDk3NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "CDS Qualified",
      rating: 5,
      text: "The comprehensive study material and regular mock tests helped me identify my weak areas. The faculty support was outstanding throughout my preparation journey.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlIGZhY2UgcG9ydHJhaXR8ZW58MHx8fHx8MTc3MDk3NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Anjali Verma",
      role: "SSB Interview Cleared",
      rating: 5,
      text: "The personality development and confidence-building sessions were invaluable. My SSB interview preparation at KDA was structured and result-oriented.",
      image:
        "https://images.unsplash.com/photo-1517070213202-1e1f1db4ebb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fHwxNzcwOTc1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      name: "Arjun Kumar",
      role: "Army Officer (Selected)",
      rating: 5,
      text: "Best decision I made for my defence career! The quality of teaching and personalized attention sets KDA apart from other coaching centres. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlIHBvcnRyYWl0fGVufDB8fHx8fDE3NzA5NzUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-8 h-8 text-sky-700" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Student Testimonials
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from our successful defence aspirants who have achieved their
            dreams with Kuchaman Defence Academy
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative px-4 sm:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 mb-6 flex-grow line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-slate-200 pt-6">
                    {/* Profile Section */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-green-700 font-semibold">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10">
            {/* <button
              className="swiper-button-prev-custom pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -ml-4 sm:ml-0"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              className="swiper-button-next-custom pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -mr-4 sm:mr-0"
              aria-label="Next testimonial"
            >
              →
            </button> */}
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-8">
          <p className="text-slate-700 text-lg">
            Join{" "}
            <span className="font-bold text-sky-700">
              5000+ successful students
            </span>{" "}
            who have transformed their lives with KDA
          </p>
        </div>
      </div>

      <style>{`
        .swiper-pagination-custom {
          position: relative !important;
          margin-top: 24px;
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #0369a1;
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
