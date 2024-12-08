import * as React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import "swiper/css";
import "swiper/css/pagination";
import { findHomeInfoQuery } from "@/providers";
import { MiChevronDown } from "@/lib/icons-name";
import { SwiperHero } from "@/components/swiper-hero";

const HomeHero: React.FC = async () => {
  const { title, description, images } = await findHomeInfoQuery();

  return (
    <SwiperHero images={images}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            {title}
          </h1>

          <div className="[&>p>strong]:font-bold text-xl md:text-2xl mb-8 text-center">
            <BlocksRenderer content={description as []} />	
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
