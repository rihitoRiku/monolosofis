"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi 
} from "@/components/ui/carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";
import { PRODUCTS } from "@/lib/constants";

export default function BookCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const onPrevClick = () => {
    api?.scrollPrev();
  };

  const onNextClick = () => {
    api?.scrollNext();
  };

  return (
    <div
      className="mx-auto mt-20 pt-20 max-w-screen-xl px-0 sm:px-4"
      data-aos="fade-up"
      data-aos-delay="100"
      id="collection"
    >
      <div className="mx-auto flex max-w-[60rem] flex-col justify-between gap-12 px-4 py-20 md:flex-row">
        <div className="flex flex-col items-start">
          <h3 className="mb-6 font-medium">Explore The Series</h3>
          <h6>
            Journey through our handpicked collection, where every book opens a door to new ideas, adventures, and perspectives. What will you discover next?
          </h6>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onPrevClick}
            className="border-pallete-ternary flex size-16 cursor-pointer items-center justify-center rounded-full border"
          >
            <FaArrowLeft className="text-pallete-ternary text-3xl" />
          </button>
          <button
            onClick={onNextClick}
            className="bg-pallete-main flex size-16 cursor-pointer items-center justify-center rounded-full"
          >
            <FaArrowRight className="text-3xl text-pallete-ternary" />
          </button>
        </div>
      </div>
      <div className="bg-white p-12 sm:rounded-2xl md:p-8">
        <div className="mx-auto max-w-[60rem]">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="select-none">
              {PRODUCTS.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="md:p-2">
                    <div
                      className={`flex aspect-[4/5] flex-col justify-between rounded-3xl p-4 md:p-3 ${product.color}`}
                    >
                      <div className="mt-12 flex items-center justify-center sm:mt-8">
                        <Image
                          alt={product.title}
                          src={product.imageUrl}
                          width={120}
                          height={120}
                          className=""
                        />
                      </div>
                      <div className="flex h-[50%] flex-col justify-between rounded-3xl bg-white p-6 pt-8 sm:p-3">
                        <div className="">
                          <div className="flex justify-between">
                            <h4 className="text-2xl font-medium sm:text-2xl">
                              {product.title}
                            </h4>
                          </div>
                          <p className="text-lg text-neutral-700 sm:text-base">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}