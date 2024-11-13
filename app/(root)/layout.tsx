//layout for the main components
export const dynamic = 'force-dynamic'

import MobileNav from "@/components/Mobile/MobileNav";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import Image from "next/image";

//display desktop navBar and mobile navBar based on view port width
//children are the same
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Nathan', lastName: 'Chan' };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* sidebar max-md:hidden for <= md*/}
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        {/* root-layout: md-hidden for above 768px width */}
        <div className="root-layoutMobile">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>


  );
}