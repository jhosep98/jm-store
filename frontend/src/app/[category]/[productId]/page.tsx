import * as React from "react";

import { ProductDetail, SwiperProduct } from "@/components";

export const metadata = {
  title: "Classic T-Shirt",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
};

export default function ProductIdPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[25px] my-[25px]">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-16">
        <SwiperProduct
          image="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          name="Classic T-Shirt"
        />

        <ProductDetail
          name="Denim Jeans"
          price={49.99}
          category="women"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
        />
      </div>
    </main>
  );
}
