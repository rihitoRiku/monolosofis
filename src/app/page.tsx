"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Capriola } from "next/font/google";
const capriola = Capriola({
  weight: "400",
  variable: "--font-capriola",
  subsets: ["latin"],
});
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { showDevelopmentToast } from "@/hooks/ToastNotification";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowRight, FaArrowLeft, FaAngleRight } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { IoBook } from "react-icons/io5";
import { LuBookCopy } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    title: "Monolosofis",
    description: "Strong Italian coffee brew",
    imageUrl: "/philosopher.png",
    color: "bg-emerald-100",
  },
  {
    id: 2,
    title: "Cafe Society",
    description: "Classic coffee with frothed milk",
    imageUrl: "/coffeebean.png",
    color: "bg-amber-100",
  },
  {
    id: 3,
    title: "Poetry",
    description: "Espresso with steamed milk",
    imageUrl: "/rose.png",
    color: "bg-rose-100",
  },
  {
    id: 4,
    title: "Flow with Universe",
    description: "Chocolate infused coffee drink",
    imageUrl: "/blackhole.png",
    color: "bg-fuchsia-100",
  },
  {
    id: 5,
    title: "Serenity of Life",
    description: "Sweet malted hot drink",
    imageUrl: "/calm.png",
    color: "bg-pink-100",
  },
];

export default function Page() {
  const [api, setApi] = useState<CarouselApi>();

  const onPrevClick = () => {
    api?.scrollPrev();
  };

  const onNextClick = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    AOS.init({ once: true, mirror: false });
  }, []);
  return (
    <div>
      {/* Full width global container */}
      <div className="bg-pallete-background w-full">
        <div className="w-full rounded-b-[1rem] bg-pallete-main">
          <div className="w-full rounded-b-[2rem] bg-white pb-[6rem]">
            {/*  */}
            <div className="bg-pallete-main rounded-b-[4rem]">
              <div className="relative mx-auto flex max-w-[80rem] flex-col items-center justify-center px-4">
                <div className="mt-[12rem] flex flex-col items-center justify-center">
                  <h1
                    className={`${capriola.className} mb-8 text-center font-semibold`}
                  >
                    Gateway to Realm of Mind and Imagination
                  </h1>
                  <h6 className="mb-16 max-w-[64rem] text-center">
                    Feed your mind with tales of fantasy, wisdom of philosophy, beauty of poetry, and depth of spirituality. We offer books and novels that ignite the mind and inspire the soul. Let's dive into worlds of endless imagination!
                  </h6>
                </div>
                <div className="mb-12 space-x-2 md:space-x-4 ">
                  <Button
                    onClick={showDevelopmentToast}
                    className="cursor-pointer rounded-lg bg-white px-6 py-5 text-base text-neutral-900 shadow-none hover:bg-neutral-100 md:rounded-2xl md:px-8 md:py-8"
                  >
                    <h5>Explore Now!</h5>
                  </Button>
                  <Button
                    onClick={showDevelopmentToast}
                    variant={"outline"}
                    className="font-nunito bg-pallete-main hover:bg-pallete-main cursor-pointer rounded-lg px-6 py-5 text-base md:rounded-2xl md:px-8 md:py-8 shadow-none"
                  >
                    <h5>Read For Free</h5>
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
          <div
            className="mx-auto max-w-screen-xl px-4 py-36"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mt-24 mb-28 flex flex-col items-start justify-center gap-6 md:mt-34 md:flex-row md:gap-20">
              <h2 className="flex-1/2 font-medium">About Monolosofis</h2>
              <h6 className="flex-1/2">
                Stands as one of our finest philosophy books, addressing humanity's greatest existential questions. Dive into explorations of God's existence, the fabric of reality, the enigma of consciousness, and the search for purpose and meaning in life. 
              </h6>
            </div>
            <div className="bg-white flex flex-col items-center justify-between rounded-2xl p-4 md:flex-row md:p-[2rem]">
              <div className="relative h-[200px] w-full overflow-x-clip md:h-[16rem] md:w-3/5">
                <div className="relative bottom-[2rem] h-full w-full scale-150 md:absolute md:inset-0 md:-top-12 md:bottom-0 md:h-[140%] md:scale-100">
                  <Image
                    className="object-contain object-bottom"
                    src="/bookillust3.png"
                    alt="bookillust3"
                    fill
                  />
                </div>
              </div>
              <div className="flex h-[180px] w-full flex-row items-center justify-center gap-12 rounded-2xl bg-pallete-main px-8 md:h-[16rem] md:w-1/2 md:flex-col md:items-start lg:flex-row lg:items-center">
                <div className="flex gap-2 lg:-mt-12">
                  <div className="">
                    <Image src="/pen.png" alt="" width={64} height={64} />
                  </div>
                  <div className="">
                    <h5>Author</h5>
                    <h4 className="font-medium">Riku</h4>
                  </div>
                </div>
                <div className="flex gap-4 lg:mt-12">
                  <div className="">
                    <Image src="/books.png" alt="" width={64} height={64} />
                  </div>
                  <div className="">
                    <h5>Total</h5>
                    <h4 className="font-medium">5 Books</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
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
                  {products.map((product) => (
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
                                {/* <h5>$ {product.price.toFixed(2)}</h5> */}
                              </div>
                              <p className="text-lg text-neutral-700 sm:text-base">
                                {product.description}
                              </p>
                            </div>
                            {/* <Button
                              variant={"outline"}
                              className="max-w-[10rem] rounded-xl py-6 shadow-none"
                            >
                              View Book Demo
                            </Button> */}
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
        <div className="mx-auto flex max-w-screen-xl items-center px-4">
          <div className="my-36 flex w-full flex-col gap-12 border-y py-20 lg:flex-row">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="flex-2/5"
            >
              <h5 className="mb-6">Know more</h5>
              <h3 className="mb-12 font-medium">About The Writer</h3>
              <h6 className="mb-32">
                Stories don’t write themselves. Meet the author behind the words and discover what drives their craft.
              </h6>
              <Button
                variant={"link"}
                className="cursor-pointer text-xl font-light text-pallete-secondary"
              >
                Get to Know <FaAngleRight className="mt-0.5 size-5" />
              </Button>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex-3/5 md:p-16"
            >
              <div className=" relative aspect-square w-full rounded-[8rem]">
                <Image
                  className="relative object-contain"
                  src="/bookillust2.png"
                  alt="pencilillust"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="mx-auto mb-56 flex max-w-screen-xl items-center px-4" id="contact"
        >
          <div className="bg-pallete-main relative flex h-[48rem] w-full justify-center gap-8 rounded-[6rem] py-20">
            <div className="flex flex-col items-center gap-24 px-4">
              <h2 className="max-w-screen-md text-center text-pallete-secondary">
                Let's Work On
                <br /> Something Cool Together
              </h2>
              <Button
                onClick={showDevelopmentToast}
                className="text-pallete-main h-16 w-[12rem] cursor-pointer rounded-3xl bg-pallete-primary hover:bg-pallete-primary text-base font-semibold "
              >
                {/* <MdOutlineEmail className="size-6 md:size-10" />{" "} */}
                <h5>Talk to Author</h5>
              </Button>
            </div>

            <div className="absolute -bottom-64 flex aspect-square w-full max-w-[36rem] items-center justify-center rounded-[8rem] px-8">
              <div className="bg-pallete-background relative aspect-square w-full rounded-[8rem]">
                <Image
                  className="relative scale-75 -rotate-45 object-contain"
                  src="/pencilillust.svg"
                  alt="pencilillust"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
