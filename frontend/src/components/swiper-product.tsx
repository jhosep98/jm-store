"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperProductModel {
  images: Array<{ image: string; name: string }>;
}

export const SwiperProduct: React.FC<SwiperProductModel> = ({ images }) => (
  <div className="relative min-h-[420px] w-full col-span-2">
    <Swiper
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      modules={[Navigation, Pagination, Autoplay]}
    >
      {images.map((img) => (
        <SwiperSlide key={img.name}>
          <Image
            src={img.image}
            alt={img.name}
            className="w-full object-cover rounded-lg shadow-lg h-[520px]"
            width={600}
            height={620}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
