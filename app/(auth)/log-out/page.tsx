import { signOut } from '@/lib/actions/user.actions'
import React from 'react'

const Logout = async () => {
  const signout = await signOut();
  return (
    <div>
      Logout page
    </div>
  )
}

export default Logout
