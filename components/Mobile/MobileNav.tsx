"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Footer from "../ui/Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="opacity-100 border-2 bg-white w-2/3"
        >
          <Link
            href="/"
            className="mb-12 flex pl-4 pt-2
            cursor-pointer items-center gap-2"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="horizon logo"
              className="size-[24px]
                         max-xl:size-14"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobileNav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col pt-16 text-white gap-4">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;
                  // || pathname.startsWith(item.route);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={clsx(
                          "mobilenav-sheet_close w-full  shadow ",
                          { "bg-bank-gradient": isActive }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt="Nav Logo"
                          width={20}
                          height={20}
                          className={clsx({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={clsx("text-16 text-slate-900 font-light", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            <Footer user={user} type='mobile'/>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
