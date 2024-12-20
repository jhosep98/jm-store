"use client";

import * as React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import {
  SolarDeliveryOutline,
  HugeiconsCustomerSupport,
  MdiSecureOutline,
  SolarSaleOutline,
} from "@/lib/icons-name";

export const BannerFixed: React.FC = () => (
  <div className="py-3 px-4 bg-content1 top-0 z-20 border-b border-divider">
    <Swiper
      className="flex items-center container max-w-screen-lg mx-auto px-4"
      spaceBetween={10}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="flex justify-center items-center">
          <SolarSaleOutline className="mr-2" />
          <p>Descuento 20%</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
          <HugeiconsCustomerSupport className="mr-2" />
          <p>Soporte 24/7</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
          <MdiSecureOutline className="mr-2" />
          <p>Pago 100% seguro</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
          <SolarDeliveryOutline className="mr-2" />
          <p>Envío gratuito</p>
        </div>
      </SwiperSlide>

      {/* COPY */}

       <SwiperSlide>
        <div className="flex justify-center items-center">
          <SolarSaleOutline className="mr-2" />
          <p>Descuento 20%</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
          <HugeiconsCustomerSupport className="mr-2" />
          <p>Soporte 24/7</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
          <MdiSecureOutline className="mr-2" />
          <p>Pago 100% seguro</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
          <SolarDeliveryOutline className="mr-2" />
          <p>Envío gratuito</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);
