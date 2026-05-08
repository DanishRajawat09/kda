import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  MessageCircle,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function TestimonialsSection() {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  const videos = [
    {
      id: 1,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.50 PM.mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.55 PM.jpeg",
    },
    {
      id: 2,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.51 PM.mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.55 PM (1).jpeg",
    },
    {
      id: 3,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.52 PM.mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.56 PM.jpeg",
    },
    {
      id: 4,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.53 PM.mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.56 PM (1).jpeg",
    },
    {
      id: 5,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.52 PM (1).mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.55 PM.jpeg",
    },
    {
      id: 6,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.53 PM (1).mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.56 PM.jpeg",
    },
    {
      id: 7,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.54 PM.mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.55 PM (1).jpeg",
    },
    {
      id: 8,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.54 PM (1).mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.56 PM (1).jpeg",
    },
    {
      id: 9,
      videoPath:
        "/testimonial-video/WhatsApp Video 2026-05-07 at 6.40.57 PM.mp4",
      thumbnail:
        "/testimonial-video/WhatsApp Image 2026-05-07 at 6.40.55 PM.jpeg",
    },
  ];

  const handlePlayPause = (videoId: number) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideoId === videoId) {
      video.pause();
      setPlayingVideoId(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => v?.pause());
      video.play();
      setPlayingVideoId(videoId);
    }
  };

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
              delay: 5000,
              disableOnInteraction: true,
            }}
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
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Video Container */}
                  <div className="relative group">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[video.id] = el;
                      }}
                      className="w-full h-64 object-cover bg-black"
                      poster={video.thumbnail}
                      onEnded={() => setPlayingVideoId(null)}
                    >
                      <source src={video.videoPath} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay */}
                    {playingVideoId !== video.id && (
                      <button
                        onClick={() => handlePlayPause(video.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300"
                        aria-label="Play video"
                      >
                        <div className="bg-sky-700 hover:bg-sky-800 text-white rounded-full p-4 transition-all transform group-hover:scale-110">
                          <Play className="w-8 h-8 fill-current" />
                        </div>
                      </button>
                    )}

                    {/* Play Controls */}
                    {playingVideoId === video.id && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
                        <button
                          onClick={() => handlePlayPause(video.id)}
                          className="text-white hover:text-sky-400 transition-colors"
                          aria-label="Pause video"
                        >
                          <Pause className="w-6 h-6 fill-current" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-slate-600 font-medium mb-3">
                      Student Testimonial
                    </p>
                    <p className="text-sm text-slate-500">
                      Watch how our students have succeeded in their defence
                      exam journey
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/3 -translate-y-1/2 w-full flex justify-between pointer-events-none z-10 px-0">
            <button
              className="swiper-button-prev-custom absolute pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -translate-y-1/2 left-0 -translate-x-full -ml-4 sm:-ml-6"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              className="swiper-button-next-custom absolute pointer-events-auto bg-sky-700 hover:bg-sky-800 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all shadow-lg hover:shadow-xl active:scale-95 -translate-y-1/2 right-0 translate-x-full -mr-4 sm:-mr-6"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
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
