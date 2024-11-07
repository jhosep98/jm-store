"use client";

import * as React from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface SwiperProductModel {
  image: string;
  name: string;
}

export const SwiperProduct: React.FC<SwiperProductModel> = (product) => (
  <div className="relative min-h-[420px] w-full col-span-2">
    <Swiper
      className="mySwiper"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Image
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
          width={600}
          height={420}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
          width={600}
          height={420}
        />
      </SwiperSlide>
    </Swiper>
  </div>
);
