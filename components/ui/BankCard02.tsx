import React from 'react'

interface BankCard02Props {
   bankName: string;
   cardNumber: string;
   cardHolderName: string;
   expiryDate: string;
   logoUrl?: string;
}

const BankCard02 = ({ bankName, cardNumber, cardHolderName, expiryDate, logoUrl} : BankCard02Props ) => {
  return (
    <div className="w-[320px] h-[180px] rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
           <h2 className="text-xl font-semibold">{bankName}</h2>
           {logoUrl && (
              <img
                 src={logoUrl}
                 alt="Bank Logo"
                 className="w-12 h-12 object-contain"
              />  
           )}
        </div>
        <div className="mt-4">
           <p className="text-lg font-mono tracking-widest">{cardNumber}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
           <div>
              <p className="text-sm text-gray-300">Cardholder</p>
              <p className="text-lg">{cardHolderName}</p>
           </div>
           <div>
              <p className="text-sm text-gray-300">Expires</p>
              <p className="text-lg">{expiryDate}</p>
           </div>
        </div>
    </div>
  )
}

export default BankCard02
