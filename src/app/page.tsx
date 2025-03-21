"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Capriola } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const capriola = Capriola({
  weight: "400",
  variable: "--font-capriola",
  subsets: ["latin"],
});
import { FaArrowRight, FaArrowLeft, FaAngleRight } from "react-icons/fa6";

export default function Page() {
  const [api, setApi] = useState<CarouselApi>();

  const onPrevClick = () => {
    api?.scrollPrev();
  };

  const onNextClick = () => {
    api?.scrollNext();
  };
  return (
    <div>
      {/* Full width global container */}
      <div className="bg-pallete-background w-full">
        <div className="w-full rounded-b-[1rem] bg-[#FFEFE0]">
          <div className="w-full rounded-b-[2rem] bg-white pb-[6rem] shadow-2xl shadow-neutral-200">
            {/*  */}
            <div className="bg-pallete-blue rounded-b-[4rem]">
              <div className="relative mx-auto flex max-w-[80rem] flex-col items-center justify-center px-4 font-sans text-neutral-100">
                <div className="mt-[12rem] flex flex-col items-center justify-center">
                  <h1
                    className={`${capriola.className} mb-8 text-center font-semibold`}
                  >
                    Expand Your Mind by Reading a Book
                  </h1>
                  <h6 className="mb-16 max-w-[64rem] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit eius repellendus dolorem dicta aut dolore atque magnam
                    nisi ipsam assumenda!
                  </h6>
                </div>
                <div className="mb-12 space-x-4">
                  <Button className="cursor-pointer rounded-lg bg-white px-6 py-5 text-base text-neutral-900 shadow-2xl hover:bg-neutral-100 md:rounded-2xl md:px-8 md:py-6">
                    Download Now
                  </Button>
                  <Button
                    variant={"outline"}
                    className="bg-pallete-blue hover:bg-pallete-blue cursor-pointer rounded-lg px-6 py-5 text-base hover:text-white md:rounded-2xl md:px-8 md:py-6"
                  >
                    Read For Free
                  </Button>
                </div>
                <div className="flex w-full items-center justify-center px-12">
                  <div className="relative -mb-[6rem] aspect-square w-full max-w-[32rem]">
                    <Image
                      alt="bookillusts"
                      src="/bookillust.png"
                      fill
                      className="relative object-contain"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mx-auto max-w-screen-xl px-4 py-36">
            <div className="mt-24 mb-28 flex flex-col items-start justify-center gap-6 md:mt-34 md:flex-row md:gap-20">
              <h2 className="flex-1/2 font-medium">About Monolosofis</h2>
              <h6 className="flex-1/2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores ex temporibus dolorum similique tempora pariatur,
                ratione dignissimos corporis saepe eaque possimus voluptates,
                ipsa, eligendi enim?
              </h6>
            </div>
            <div className="bg-pallete-pink flex flex-col items-center justify-between rounded-2xl p-[2rem] md:h-[20rem] md:flex-row">
              <div className="h-[10rem] md:h-1/5"></div>
              <div className="h-[16rem] w-full rounded-2xl bg-white md:w-1/2"></div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mx-auto mt-48 max-w-screen-xl px-4">
          <div className="mx-auto flex max-w-[60rem] flex-col justify-between gap-12 py-20 md:flex-row">
            <div className="flex flex-col items-start">
              <h3 className="mb-6 font-medium">New Arrivals</h3>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, nisi!
              </h6>
            </div>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={onPrevClick}
                className="border-pallete-blue flex size-16 cursor-pointer items-center justify-center rounded-full border"
              >
                <FaArrowLeft className="text-pallete-blue text-3xl" />
              </button>
              <button
                onClick={onNextClick}
                className="bg-pallete-blue flex size-16 cursor-pointer items-center justify-center rounded-full"
              >
                <FaArrowRight className="text-3xl text-white" />
              </button>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8">
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
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-2">
                        <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl border p-3">
                          <div className="">
                            <Image alt="" src="" />
                          </div>
                          <div className="flex h-[50%] flex-col justify-between rounded-3xl border p-3 pt-8">
                            <div className="">
                              <div className="flex justify-between">
                                <h4 className="font-medium">Title</h4>
                                <h5>$ 34.00</h5>
                              </div>
                              <p>Sweet malted hot drink</p>
                            </div>
                            <Button
                              variant={"outline"}
                              className="max-w-[10rem] rounded-xl py-4 shadow-none"
                            >
                              View Book Demo
                            </Button>
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
        {/*  */}
        <div className="mx-auto flex h-[64rem] max-w-screen-xl items-center px-4">
          <div className="flex w-full flex-col gap-8 border-y py-20 lg:flex-row">
            <div className="flex-2/5">
              <h5 className="mb-6">Some Topics</h5>
              <h3 className="mb-12 font-medium">What's Inside The Book?</h3>
              <h6 className="mb-32">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, dicta.
              </h6>
              <Button
                variant={"link"}
                className="cursor-pointer text-xl font-light"
              >
                Content <FaAngleRight className="mt-0.5 size-5" />
              </Button>
            </div>
            <div className="flex-3/5">
              <Image alt="" src="" />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mx-auto flex max-w-screen-xl items-center px-4 mb-56">
          <div className="bg-pallete-blue relative flex h-[48rem] w-full justify-center gap-8 rounded-[6rem] py-20">
            <h2 className="max-w-screen-md text-center text-white">
              Let's Work On
              <br /> Something Cool Together
            </h2>
            {/* <button></button> */}
            <div className="absolute -bottom-64 flex aspect-square w-full max-w-[36rem] items-center justify-center rounded-[8rem] px-8">
              <div className="rounded-[8rem bg-pallete-background aspect-square w-full rounded-[8rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
