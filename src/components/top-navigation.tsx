"use client"
import Link from "next/link";
import React, { useState } from "react";
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
import { showDevelopmentToast } from "@/hooks/ToastNotification";

export default function TopNavigation() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-pallete-main/40 fixed top-0 z-50 w-full backdrop-blur-md select-none">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2 py-4 md:px-4 md:py-6">
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
                Riku's Journal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <NavigationMenu className="hidden md:flex font-rubik">
            <NavigationMenuList className="ms-32 space-x-12">
              <NavigationMenuItem>
                <Link href="#collection" passHref
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('collection');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }
                  }}>
                  <h6>Collection</h6>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link href="/" passHref>
                  <h6>Content</h6>
                </Link>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="#contact" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('collection');
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }
                  }}>
                  <h6>Contact</h6>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              onClick={showDevelopmentToast}
              className="cursor-pointer rounded-lg bg-pallete-secondary px-6 py-5 text-base font-semibold shadow-2xl hover:bg-pallete-ternary md:w-[9rem] md:rounded-2xl md:px-8 md:py-6"
            >
              <FaShoppingBag className="size-5 md:size-6" /> Visit Store
            </Button>
            {/* Mobile Navigation - Hidden on desktop */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  size="icon"
                  className="bg-pallete-main hover:bg-pallete-main cursor-pointer rounded-xl text-neutral-200 shadow-none hover:text-neutral-50 md:p-4 md:text-lg"
                >
                  <HiMenuAlt3 className="size-8 text-pallete-secondary" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-none bg-neutral-100 p-8"
              >
                <SheetHeader>
                  <SheetTitle className=""></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-12 font-medium text-neutral-900 font-nunito text-end">
                  <Link href="/" className="" onClick={() => setOpen(false)}>
                    <h4>Home</h4>
                  </Link>
                  <Link 
                    href="#collection" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('collection');
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }
                      setOpen(false); // Close the sheet
                    }}
                  >
                    <h4>Collection</h4>
                  </Link>
                  <Link 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact'); // Fixed: was pointing to 'collection'
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }
                      setOpen(false); // Close the sheet
                    }}
                  >
                    <h4>Contact</h4>
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
