'use client'
import { Section } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AuthForm02 = ({ type } : { type:string }) => {
   const [user, setUser] = useState(null)
   return (
     <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
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
              <h1 className="text-26 font-ibm-plex-serif 
              font-bold text-black-1">
                 Horizon
              </h1>
           </Link>
           <div className="flex flex-col gap-1 md:gap-3">
              <h1>{user}</h1>
           </div>
        </header>
      </section>
  )
}

export default AuthForm02
