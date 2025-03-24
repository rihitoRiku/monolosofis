"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { showDevelopmentToast } from "@/hooks/ToastNotification";

export default function ContactSection() {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      className="mx-auto mb-56 flex max-w-screen-xl items-center px-4"
      id="contact"
    >
      <div className="bg-pallete-main relative flex h-[48rem] w-full justify-center gap-8 rounded-[6rem] py-20">
        <div className="flex flex-col items-center gap-24 px-4">
          <h2 className="max-w-screen-md text-center text-pallete-secondary">
            Let's Work On
            <br /> Something Cool Together
          </h2>
          <Button
            onClick={showDevelopmentToast}
            className="text-pallete-main h-16 w-[12rem] cursor-pointer rounded-3xl bg-pallete-primary hover:bg-pallete-primary text-base font-semibold"
          >
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
  );
}