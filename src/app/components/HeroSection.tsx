import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
const slides = [
  "/2.jpg.jpeg",
  "/3.jpg.jpeg",
  "/4.jpg.jpeg",
  "/5.jpg.jpeg",
  "/6.jpg.jpeg",
  "/7.jpg.jpeg",
  "/8.jpg.jpeg",
  "/9.jpg.jpeg",
  "/10.jpg.jpeg",
  "/0222.jpg.jpeg",
];
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[100vh]"
    >
      {/* Navigation Buttons */}
      <button
        className="swiper-button-prev-custom hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10
  bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <ChevronLeft size={28} className="text-black" />
      </button>

      <button
        className="swiper-button-next-custom hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10
  bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <ChevronRight className="text-black" size={28} />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="Defence Training"
              className="w-full h-full   object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
