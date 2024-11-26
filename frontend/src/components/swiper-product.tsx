"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  MeteorIconsChevronLeft,
  MeteorIconsChevronRight,
  MiClose,
} from "@/lib/icons-name";
import { Button } from "@nextui-org/button";

interface SwiperProductModel {
  images: Array<{ image: string; name: string }>;
}

export const SwiperProduct: React.FC<SwiperProductModel> = ({ images }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (images.length - 4));
  }, [images.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + (images.length - 4)) % (images.length - 4)
    );
  }, [images.length]);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
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
                className="object-top rounded-md shadow-lg w-full h-auto"
                width={600}
                height={480}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-90 backdrop-blur-md backdrop-saturate-150 bg-overlay/80 w-screen h-screen">
          <Button
            isIconOnly
            onClick={showNextImage}
            className="absolute top-1/2 left-16 text-white rounded-full"
            variant="light"
          >
            <MeteorIconsChevronLeft fontSize={32} />
          </Button>

          <Button
            isIconOnly
            className="absolute top-1/2 right-16 text-white rounded-full"
            variant="light"
            onClick={showNextImage}
          >
            <MeteorIconsChevronRight fontSize={32} />
          </Button>

          <Button
            className="absolute top-4 right-8 text-white rounded-full"
            onClick={closeModal}
            variant="light"
            isIconOnly
          >
            <MiClose fontSize={32} />
          </Button>

          <Image
            src={images[currentImageIndex].image}
            alt={images[currentImageIndex].name}
            width={700}
            height={620}
            className="object-contain"
            priority
          />
        </div>
      ) : null}
    </>
  );
};
