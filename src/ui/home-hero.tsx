"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { MiChevronDown } from "@/lib/icons-name";

const IMAGES = [
  "https://picsum.photos/id/10/1920/1080",
  "https://picsum.photos/id/20/1920/1080",
  "https://picsum.photos/id/30/1920/1080",
];

export const HomeHero: React.FC = () => (
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
    {IMAGES.map((img) => (
      <SwiperSlide key={img}>
        <div className="relative bg-gray-900 text-white min-h-[calc(100vh-65px)]">
          <Image
            src={img}
            alt="Fashion Hero"
            className="w-full object-cover object-center "
            fill
            priority
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Discover Your Style
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Explore the latest fashion trends at StyleHub
              </p>

              <Link href="#new-releases">
                <Button
                  radius="full"
                  size="lg"
                  variant="light"
                  color="default"
                  className="text-white animate-bounce"
                  isIconOnly
                >
                  <MiChevronDown />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
