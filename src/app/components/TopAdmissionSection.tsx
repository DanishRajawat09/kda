import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TopAdmissionSection() {
  const images = [
    "/top addmisions/0222.jpg (1).jpeg",
    "/top addmisions/0222.jpg.jpeg",
    "/top addmisions/10.jpg.jpeg",
    "/top addmisions/2.jpg.jpeg",
    "/top addmisions/3.jpg.jpeg",
    "/top addmisions/4.jpg.jpeg",
    "/top addmisions/5.jpg.jpeg",
    "/top addmisions/6.jpg.jpeg",
    "/top addmisions/7.jpg.jpeg",
    "/top addmisions/8.jpg.jpeg",
    "/top addmisions/9.jpg.jpeg",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-sky-700" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Top Admissions
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Celebrating our top-performing students who have been selected in prestigious defence exams
          </p>
        </div>

        {/* Images Slider */}
        <div className="relative px-4 sm:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".top-admission-next",
              prevEl: ".top-admission-prev",
            }}
            pagination={{
              el: ".top-admission-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
            }}
            className="pb-16"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden aspect-[4/3] group flex items-center justify-center">
                  <img
                    src={image}
                    alt={`Top admission ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none z-10 px-0">
            <button
              className="top-admission-prev absolute pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -translate-y-1/2 left-0 -translate-x-full -ml-4 sm:-ml-6"
              aria-label="Previous image"
            >
                   <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              className="top-admission-next absolute pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -translate-y-1/2 right-0 translate-x-full -mr-4 sm:-mr-6"
              aria-label="Next image"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="top-admission-pagination flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-md p-8">
          <p className="text-slate-700 text-lg font-medium">
            Every student shown here has achieved <span className="text-sky-700 font-bold">remarkable success</span> in their defence exam preparation with KDA
          </p>
        </div>
      </div>

      <style>{`
        .top-admission-pagination {
          position: relative !important;
          margin-top: 24px;
        }

        .top-admission-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }

        .top-admission-pagination .swiper-pagination-bullet-active {
          background-color: #0369a1;
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 640px) {
          .top-admission-prev,
          .top-admission-next {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
