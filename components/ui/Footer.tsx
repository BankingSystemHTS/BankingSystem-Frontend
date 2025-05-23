import React from 'react'
import Image from 'next/image'
import { signOut } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
   const router = useRouter();
   const handleSignOut = async () => {
      try {
         const success = await signOut();
         if(success){
            router.push('/sign-in');
         }
      } catch (error) {
         console.error(error);
      }
   }
   return (
      <footer className="footer">
         <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className="text-xl font-bold text-gray-700">
               {user?.name[0]}
            </p>
         </div>
         <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className="text-14 truncate font-semibold text-gray-700">{user?.name}</h1>
            <p className="text-14 truncate font-normal text-gray-600">
               {user?.email}
            </p>
         </div>
         <div className="footer_image" onClick={ handleSignOut }>
            <Image src="icons/logout.svg" fill alt="hts"/>
         </div>
      </footer>
   )
}

export default Footer
