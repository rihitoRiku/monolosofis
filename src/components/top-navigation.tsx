"use client"
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaShoppingBag } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { showDevelopmentToast } from "@/components/ToastNotification";

export default function TopNavigation() {
  return (
    <>
      <div className="bg-pallete-blue/40 fixed top-0 z-50 w-full backdrop-blur-md select-none">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2 py-4 text-white md:px-4 md:py-6">
          <Link href="/">
            <div className="flex items-center gap-4">
              {/* <Image
                src="/logo.svg"
                alt="Logo"
                width={34}
                height={34}
                className="h-[36px] w-[36px] rounded-full border"
              /> */}
              <span className="font-passion-conflict ps-2 text-xl font-semibold md:text-2xl">
                Monolosofis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="ms-32 space-x-12">
              <NavigationMenuItem>
                <Link href="" passHref>
                  <h6>Collection</h6>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="" passHref>
                  <h6>Content</h6>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="" passHref>
                  <h6>Contact Us</h6>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              onClick={showDevelopmentToast}
              className="text-pallete-blue cursor-pointer rounded-lg bg-white px-6 py-5 text-base font-semibold shadow-2xl hover:bg-neutral-100 md:w-[9rem] md:rounded-2xl md:px-8 md:py-6"
            >
              <FaShoppingBag className="size-5 md:size-6" /> Buy Book
            </Button>
            {/* Mobile Navigation - Hidden on desktop */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  size="icon"
                  className="bg-custom-light hover:bg-custom-light cursor-pointer rounded-xl text-neutral-200 shadow-none hover:text-neutral-50 md:p-4 md:text-lg"
                >
                  <HiMenuAlt3 className="size-8" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-none bg-neutral-200 dark:bg-neutral-950"
              >
                <SheetHeader>
                  <SheetTitle className="text-start text-2xl">Menu</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                  <Link href="" className="text-lg font-medium hover:underline">
                    <h6>Collection</h6>
                  </Link>
                  <Link href="" className="text-lg font-medium hover:underline">
                    <h6>Content</h6>
                  </Link>
                  <Link href="" className="text-lg font-medium hover:underline">
                    <h6>Contact Us</h6>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
