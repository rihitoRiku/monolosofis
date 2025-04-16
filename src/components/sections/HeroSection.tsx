"use client";

import React from "react";
import Image from "next/image";
import { Capriola } from "next/font/google";
import { Button } from "@/components/ui/button";
import { showDevelopmentToast } from "@/hooks/ToastNotification";

const capriola = Capriola({
  weight: "400",
  variable: "--font-capriola",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <div className="bg-pallete-main w-full rounded-b-[1rem]">
      <div className="w-full rounded-b-[2rem] bg-white pb-20">
        <div className="bg-pallete-main w-full rounded-b-[4rem]">
          <div className="relative mx-auto flex max-w-[80rem] flex-col items-center justify-center px-4">
            <div className="mt-[12rem] flex flex-col items-center justify-center">
              <h1
                className={`${capriola.className} mb-8 text-center font-semibold`}
              >
                Gateway to Realm of Mind and Imagination
              </h1>
              <h6 className="mb-16 max-w-[64rem] text-center">
                Feed your mind with tales of fantasy, wisdom of philosophy,
                beauty of poetry, and depth of spirituality. We offer books and
                novels that ignite the mind and inspire the soul. Let's dive
                into worlds of endless imagination!
              </h6>
            </div>

            <div className="mb-12 space-x-2 md:space-x-4">
              <Button
                onClick={showDevelopmentToast}
                className="cursor-pointer rounded-lg bg-white px-6 py-5 text-base text-neutral-900 shadow-none hover:bg-neutral-100 md:rounded-2xl md:px-8 md:py-8"
              >
                <h5>Explore Now!</h5>
              </Button>
              <Button
                onClick={showDevelopmentToast}
                className="font-nunito bg-pallete-main hover:bg-pallete-main cursor-pointer rounded-lg border px-6 py-5 text-base shadow-none hover:text-black md:rounded-2xl md:px-8 md:py-8"
              >
                <h5>Read For Free</h5>
              </Button>
            </div>

            <div className="mt-10 flex w-full items-center justify-center px-12">
              <div className="relative -mb-[6rem] aspect-[2/1] w-full max-w-[48rem]">
                <Image
                  alt="imagine"
                  src="/imagine.png"
                  fill
                  className="relative object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-screen-xl px-4 py-36"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="mt-24 mb-28 flex flex-col items-start justify-center gap-6 md:mt-34 md:flex-row md:gap-6">
          <h2 className="flex-1/3 font-medium md:flex-1/2 text-center">
            About Monolosofis
          </h2>
          <h6 className="md:flex-1/2">
            Stands as one of our finest philosophy books, addressing humanity's
            greatest existential questions. Dive into explorations of God's
            existence, the fabric of reality, the enigma of consciousness, and
            the search for purpose and meaning in life.
          </h6>
        </div>
        <div className="flex flex-col items-center justify-between rounded-2xl bg-white p-6 md:flex-row md:p-[2rem]">
          <div className="relative h-[200px] w-full overflow-x-clip md:h-[16rem] md:w-3/5">
            <div className="relative -mt-6 h-full w-full scale-150 md:absolute md:inset-0 md:mt-0">
              <Image
                className="object-contain object-bottom"
                src="/mind.png"
                alt="mind"
                fill
              />
            </div>
          </div>
          <div className="bg-pallete-main flex h-[180px] w-full flex-row items-center justify-center gap-12 rounded-2xl px-8 md:h-[16rem] md:w-1/2 md:flex-col md:items-start lg:flex-row lg:items-center">
            <div className="flex gap-2 lg:-mt-12">
              <div className="size-12 md:size-16">
                <Image src="/pen.png" alt="" width={64} height={64} />
              </div>
              <div className="">
                <h6>Author</h6>
                <h4 className="font-medium">Riku</h4>
              </div>
            </div>
            <div className="flex gap-4 lg:mt-12">
              <div className="size-12 md:size-16">
                <Image src="/books.png" alt="" width={64} height={64} />
              </div>
              <div className="">
                <h6>Total</h6>
                <h4 className="font-medium">5 Books</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
