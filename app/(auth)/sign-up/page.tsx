import AuthForm from '@/components/ui/AuthForm'
import AuthForm02 from '@/components/ui/AuthForm02'
import React from 'react'

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm-px6">
      <AuthForm02 type="sign-up"/>
    </section>
  )
}

export default SignUp
