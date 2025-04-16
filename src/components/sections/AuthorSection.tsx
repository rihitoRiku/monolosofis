"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";
import { showDevelopmentToast } from "@/hooks/ToastNotification";

export default function AuthorSection() {
  return (
    <div className="mx-auto flex max-w-screen-xl items-center px-4">
      <div className="my-36 flex w-full flex-col gap-12 border-y py-20 lg:flex-row">
        <div data-aos="fade-right" data-aos-delay="100" className="flex-2/5">
          <h5 className="mb-6">Know more</h5>
          <h3 className="mb-12 font-medium">About The Writer</h3>
          <h6 className="mb-32">
            Stories don't write themselves. Meet the author behind the words and
            discover what drives their craft.
          </h6>
          <Button
            variant="link"
            onClick={showDevelopmentToast}
            className="text-pallete-secondary cursor-pointer text-xl font-light"
          >
            Get to Know <FaAngleRight className="mt-0.5 size-5" />
          </Button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-3/5 md:p-16"
        >
          <div className="relative aspect-square w-full rounded-[8rem]">
            <Image
              className="relative object-contain"
              src="/writer.png"
              alt="writer"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}