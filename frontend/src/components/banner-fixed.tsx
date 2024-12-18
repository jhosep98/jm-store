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
  <div className="py-3 px-4 text-white bg-black sticky top-0 z-20 border-b border-divider">
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      loop
      className="container mx-auto max-w-screen-lg"
      autoplay={{
        delay: 3000,
      }}
    >
      <SwiperSlide>
        <div className="flex items-center justify-center gap-20">
          <div className="flex items-center">
            <SolarSaleOutline className="mr-2" />
            <p>Descuento 20%</p>
          </div>

          <div className="flex items-center">
            <HugeiconsCustomerSupport className="mr-2" />
            <p>Soporte 24/7</p>
          </div>

          <div className="flex items-center">
            <MdiSecureOutline className="mr-2" />
            <p>Pago 100% seguro</p>
          </div>

          <div className="flex items-center">
            <SolarDeliveryOutline className="mr-2" />
            <p>Envío gratuito</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center justify-center gap-20">
          <div className="flex items-center">
            <SolarSaleOutline className="mr-2" />
            <p>Descuento 20%</p>
          </div>

          <div className="flex items-center">
            <HugeiconsCustomerSupport className="mr-2" />
            <p>Soporte 24/7</p>
          </div>

          <div className="flex items-center">
            <MdiSecureOutline className="mr-2" />
            <p>Pago 100% seguro</p>
          </div>

          <div className="flex items-center">
            <SolarDeliveryOutline className="mr-2" />
            <p>Envío gratuito</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);
