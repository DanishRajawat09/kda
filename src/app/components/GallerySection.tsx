import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function GallerySection() {
  const images = [
    "/gallery/heroImage.jpeg",
    "/gallery/image1.jpeg",
    "/gallery/image2.jpeg",
    "/gallery/image3.jpeg",
    "/gallery/image4.jpeg",
    "/gallery/image5.jpeg",
    "/gallery/image6.jpeg",
    "/gallery/image7.jpeg",
    "/gallery/image8.jpeg",
    "/gallery/image9.jpeg",
    "/gallery/image10.jpeg",
    "/gallery/image11.jpeg",
    "/gallery/image12.jpeg",
    "/gallery/image13.jpeg",
    "/gallery/image14.jpeg",
    "/gallery/image15.jpeg",
    "/gallery/image16.jpeg",
    "/gallery/image17.jpeg",
    "/gallery/image18.jpeg",
    "/gallery/image19.jpeg",
    "/gallery/image20.jpeg",
    "/gallery/image21.jpeg",
    "/gallery/image22.jpeg",
    "/gallery/image23.jpeg",
    "/gallery/image24.jpeg",
    "/gallery/image25.jpeg",
    "/gallery/image26.jpeg",
    "/gallery/image27.jpeg",
    "/gallery/image28.jpeg",
    "/gallery/image29.jpeg",
    "/gallery/image30.jpeg",
    "/gallery/image31.jpeg",
    "/gallery/image32.jpeg",
    "/gallery/image33.jpeg",
    "/gallery/image34.jpeg",
    "/gallery/image35.jpeg",
    "/gallery/image36.jpeg",
    "/gallery/image37.jpeg",
    "/gallery/image38.jpeg",
    "/gallery/image39.jpeg",
    "/gallery/image40.jpeg",
    "/gallery/image41.jpeg",
    "/gallery/image42.jpeg",
    "/gallery/image43.jpeg",
    "/gallery/registrationSec.jpeg",
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="w-8 h-8 text-sky-700" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Gallery
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore memorable moments from Kuchaman Defence Academy - training sessions, events, and student achievements
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative px-4 sm:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            pagination={{
              el: ".gallery-pagination",
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
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-80 sm:h-96 group">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none z-10 px-0">
            <button
              className="gallery-prev absolute pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -translate-y-1/2 left-0 -translate-x-full -ml-4 sm:-ml-6"
              aria-label="Previous image"
            >
                  <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              className="gallery-next absolute pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -translate-y-1/2 right-0 translate-x-full -mr-4 sm:-mr-6"
              aria-label="Next image"
            >
                  <ChevronRight size={28} className="text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="gallery-pagination flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-8">
          <p className="text-slate-700 text-lg font-medium">
            Experience the vibrant campus life and <span className="text-sky-700 font-bold">learning environment</span> at KDA
          </p>
        </div>
      </div>

      <style>{`
        .gallery-pagination {
          position: relative !important;
          margin-top: 24px;
        }

        .gallery-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }

        .gallery-pagination .swiper-pagination-bullet-active {
          background-color: #0369a1;
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 640px) {
          .gallery-prev,
          .gallery-next {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}
