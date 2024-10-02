'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'


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
                    className="opacity-100 border-2 bg-white w-1/2"
                >
                    <Link
                        href='/'
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
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>

                    <div className="mobileNav-sheet">
                        <SheetClose asChild>
                            <nav className="flex flex-col pt-16 text-white gap-4">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(item.route);
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={clsx('sidebar-link shadow', { 'bg-bank-gradient': isActive })}
                                            >
                                                <div className="flex gap-4">
                                                    <Image
                                                        src={item.imgURL}
                                                        alt="Nav Logo"
                                                        width={24}
                                                        height={24}
                                                        className={clsx({ "brightness-[3] invert-0": isActive })}
                                                    />
                                                    <p className={clsx('sidebar-label', { '!text-white': isActive })}>
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </Link>

                                        </SheetClose>
                                    )
                                })
                                }
                            </nav>
                        </SheetClose>

                    </div>

                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav
