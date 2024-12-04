"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  MeteorIconsChevronLeft,
  MeteorIconsChevronRight,
  MiClose,
} from "@/lib/icons-name";

interface SwiperProductModel {
  images: Array<{ image: string; name: string }>;
}

export const SwiperProduct: React.FC<SwiperProductModel> = ({ images }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

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
    onOpen();
  };

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
            <SwiperSlide
              key={img.name}
              onClick={() => {
                openModal(images.indexOf(img));
              }}
            >
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

      <Modal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        size="2xl"
        backdrop="blur"
        placement="center"
        classNames={{
          closeButton: "hidden",
          base: "h-[480px] rounded-none",
          backdrop: "bg-overlay/80",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <Button
                isIconOnly
                onClick={showPrevImage}
                className="absolute z-10 left-4  sm:fixed top-1/2 sm:left-16 text-white rounded-none bg-[rgba(0,0,0,0.3)]"
                variant="light"
                aria-label="Previous image"
              >
                <MeteorIconsChevronLeft fontSize={32} />
              </Button>

              <Button
                isIconOnly
                className="absolute z-10 right-4 sm:fixed top-1/2 sm:right-16 text-white rounded-none bg-[rgba(0,0,0,0.3)]"
                variant="light"
                onClick={showNextImage}
                aria-label="Next image"
              >
                <MeteorIconsChevronRight fontSize={32} />
              </Button>

              <Button
                className="fixed top-4 right-4 text-white rounded-none bg-[rgba(0,0,0,0.3)]"
                onClick={onClose}
                variant="light"
                isIconOnly
                aria-label="Close modal"
              >
                <MiClose fontSize={32} />
              </Button>

              <Image
                src={images[currentImageIndex].image}
                alt={images[currentImageIndex].name}
                fill
                className="object-cover"
                priority
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
