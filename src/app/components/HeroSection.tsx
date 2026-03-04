import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


import { ChevronLeft, ChevronRight } from "lucide-react";
const slides = [
  "/heroImage1.jpeg",
  "/heroImage2.jpeg",
  "/heroImage3.jpeg",
  "/heroImage4.jpeg",
  "/heroImage5.jpeg",
  "/heroImage6.jpeg",
  "/heroImage7.jpeg",
  "/heroImage8.jpeg",
];
export function HeroSection() {

  return (
<section id="home" className="relative w-full h-[45vh] sm:h-[70vh] lg:h-[85vh]">

  {/* Navigation Buttons */}
  <button className="swiper-button-prev-custom hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10
  bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
    <ChevronLeft size={28} className='text-black'/>
  </button>

  <button className="swiper-button-next-custom hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10
  bg-white/20 backdrop-blur-md border border-white/30 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all">
    <ChevronRight className='text-black'  size={28} />
  </button>

  <Swiper
    modules={[Navigation]}
    navigation={{
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    }}
    loop={true}
    className="w-full h-full"
  >
    {slides.map((img, index) => (
      <SwiperSlide key={index}>
        <img
          src={img}
          alt="Defence Training"
          className="w-full h-full "
        />
      </SwiperSlide>
    ))}
  </Swiper>

</section>
  );
}
