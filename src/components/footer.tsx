"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex justify-between py-16 md:py-24">
          <div className="aspect-[3/2] w-full h-full max-w-[16rem]">
            <Image src="" alt="" />
          </div>
          <div className="flex gap-8 lg:gap-40 ">
            <div className="w-max space-y-4">
              <h5 className="mb-10">Store</h5>
              <h6>Tiktok Shop</h6>
              <h6>Shopee</h6>
              <h6>Tokopedia</h6>
            </div>
            <div className="w-max space-y-4">
              <h5 className="mb-10">Social</h5>
              <h6>Instagram</h6>
            </div>
            <div className="w-max space-y-4">
              <h5 className="mb-10">Information</h5>
              <h6>Home</h6>
              <h6>Products</h6>
              <h6>Reviews</h6>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t py-8">
          <h6>2025 Design by Riku</h6>
          <div className="flex gap-4">
            <h6>Privacy Policy</h6>
            <h6>Terms of Service</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
