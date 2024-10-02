'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import clsx from 'clsx'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
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
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(item.route);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={clsx('sidebar-link', {'bg-bank-gradient' : isActive})}
            >
              <div className="flex gap-4">
                <Image
                  src={item.imgURL}
                  alt="Nav Logo"
                  width={24}
                  height={24}
                  className={clsx({"brightness-[3] invert-0": isActive})}
                />
                <p className={clsx('sidebar-label', {'!text-white' : isActive})}>
                  {item.label}
                </p>
              </div>
            </Link>
          )
        }
        )
        }
        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar
