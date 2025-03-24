"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-2xl px-4 text-center md:text-start">
        <div className="flex flex-col justify-between py-16 md:flex-row md:py-24">
          <div className="mb-8 md:mb-0 flex-1/2">
            {/* <Image src="" alt="" /> */}
            <span className="font-passion-conflict md:ps-2 text-2xl font-semibold">
              Monolosofis
            </span>
          </div>
          <div className="flex flex-1/2 gap-2 md:gap-6 ">
            <div className="flex w-max flex-1/3 items-center md:items-start flex-col gap-4 ">
              <h5 className="mb-10">Store</h5>
              <Link href="#">
                <h6 className="w-max">Tiktok Shop</h6>
              </Link>
              <Link href="#">
                <h6 className="w-max">Shopee</h6>
              </Link>
              <Link href="#">
                <h6 className="w-max">Tokopedia</h6>
              </Link>
            </div>
            <div className="flex w-max items-center md:items-start flex-1/3 flex-col gap-4">
              <h5 className="mb-10">Social</h5>
              <Link href="#">
                <h6 className="w-max">Instagram</h6>
              </Link>
            </div>
            <div className="flex w-max items-center md:items-start flex-1/3 flex-col gap-4">
              <h5 className="mb-10">Information</h5>
              <Link href="#">
                <h6 className="w-max">Home</h6>
              </Link>
              <Link href="#">
                <h6 className="w-max">Products</h6>
              </Link>
              <Link href="#">
                <h6 className="w-max">Reviews</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t py-8 text-neutral-500">
          <p>Copyright © 2025 Riku | All Rights Reserved.</p>
          <div className="flex gap-2 md:gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
