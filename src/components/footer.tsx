"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col justify-between py-16 md:flex-row md:py-24">
          <div className="mb-8 md:mb-0 flex-1/2">
            {/* <Image src="" alt="" /> */}
            <span className="font-passion-conflict md:ps-2 text-2xl font-semibold">
              Monolosofis
            </span>
          </div>
          <div className="flex flex-1/2 gap-2 md:gap-6">
            <div className="flex w-max flex-1/3 flex-col gap-4">
              <h5 className="mb-10">Store</h5>
              <Link href="">
                <h6 className="w-max">Tiktok Shop</h6>
              </Link>
              <Link href="">
                <h6 className="w-max">Shopee</h6>
              </Link>
              <Link href="">
                <h6 className="w-max">Tokopedia</h6>
              </Link>
            </div>
            <div className="flex w-max flex-1/3 flex-col gap-4">
              <h5 className="mb-10">Social</h5>
              <Link href="">
                <h6 className="w-max">Instagram</h6>
              </Link>
            </div>
            <div className="flex w-max flex-1/3 flex-col gap-4">
              <h5 className="mb-10">Information</h5>
              <Link href="">
                <h6 className="w-max">Home</h6>
              </Link>
              <Link href="">
                <h6 className="w-max">Products</h6>
              </Link>
              <Link href="">
                <h6 className="w-max">Reviews</h6>
              </Link>
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
