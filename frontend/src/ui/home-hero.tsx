import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import "swiper/css";
import "swiper/css/pagination";
import { MiChevronDown } from "@/lib/icons-name";
import { getHomeInfo } from "@/lib/get-home-info";
import { SwiperHero } from "@/components/swiper-hero";

const HomeHero = async () => {
  const { title, description, images } = await getHomeInfo();

  return (
    <SwiperHero images={images}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <div className="[&>p>strong]:font-bold text-xl md:text-2xl mb-8">
            <BlocksRenderer content={description} />
          </div>

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
    </SwiperHero>
  );
};

export default HomeHero;
