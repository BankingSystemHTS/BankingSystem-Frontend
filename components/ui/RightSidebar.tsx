
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
   return (
      // hidden by default, show when xl:flex
      <aside className="right-sidebar">
         <section className="flex flex-col pb-8">
            <div className="profile-banner" />
            <div className="profile">
               <div className="profile-img">
                  <span className="text-4xl font-bold
                  text-blue-500">{user?.name[0]}</span>
               </div>

               <div className="profile-details">
                  <h1 className="profile-name">
                     {user?.name}
                  </h1>
                  <p className="profile-email">
                     {user?.email}
                  </p>
               </div>
            </div>
         </section>

         <section className="banks">
            <div className="flex w-full justify-between">
               <h2 className="header-2">My Banks</h2>
               <Link href="/" className="flex gap-2">
                  <Image
                     src="/icons/plus.svg"
                     width={20}
                     height={20}
                     alt="plus"
                  />
                  <h2 className="text-slate-500 text-sm font-regular">Add Bank</h2>
               </Link>
            </div>
            {/* shows first 2 bank cards user has */}
            {banks?.length > 0 && (
               <div className="relative flex flex-1 flex-col 
            items-center justify-center gap-5 ">
                  <div className='relative z-10 '>
                     <BankCard
                        key={banks[0].$id}
                        account={banks[0]}
                        userName={`${user?.name}`}
                        showBalance={false}
                     />
                  </div>
                  {banks[1] && (
                     <div className="absolute top-8  z-0 right-0 w-[90%]">
                        <BankCard
                           key={banks[1].$id}
                           account={banks[1]}
                           userName={`${user?.name}`}
                           showBalance={false}
                        />
                     </div>
                  )}
               </div>
            )}
         </section>
      </aside>
   )
}

export default RightSideBar
