"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface SwiperHeroModel {
  images: Array<string>;
}

export const SwiperHero: React.FC<React.PropsWithChildren<SwiperHeroModel>> = ({
  children,
  images,
}) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {images.map((img) => (
        <SwiperSlide key={img}>
          <div className="relative bg-gray-900 text-white min-h-[60svh]">
            <Image
              src={img}
              alt="Fashion Hero"
              className="w-full object-cover object-center "
              fill
              priority
            />
            {children}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
