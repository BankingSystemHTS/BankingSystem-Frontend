'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { authFormSchema } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from './button'
import CustomInput from '../CustomInput'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router'

const AuthForm = ({ type }: { type: string }) => {
  // const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log("form submitted");
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col ">
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
          <h1 className="text-26 font-ibm-plex-serif font-bold 
          text-black-1">
            Horizon
          </h1>
        </Link>
        <div className='flex flex-col gap-1 '>
          <h1 className="text-24 lg-text-36 font-semibold text-gray-900">
            {user ? 'Link Account' : type == 'sign-in' ?
              'Sign In' : 'Sign Up'
            }
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? 'Link your account to get started'
              : 'Please enter your details'
            }
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* Plaid Link */}
        </div>
      ) : (
        <>
          {/* spread all prop and methods from form to Form as props
        props like register, control, handleSubmit */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {type == 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      name="firstName"
                      control={form.control}
                      placeholder="Enter your first name"
                      label='First Name'
                    />
                    <CustomInput
                      name="lastName"
                      control={form.control}
                      placeholder="Last Name"
                      label='Last Name'
                    />
                  </div>
                  <CustomInput
                    name="Address"
                    control={form.control}
                    placeholder="Enter your specific address"
                    label='Address'
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      name="state"
                      control={form.control}
                      placeholder="ex. NY"
                      label='State'
                    />
                    <CustomInput
                      name="postalCode"
                      control={form.control}
                      placeholder="ex: 11101"
                      label='Postal Code'
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="dateOfBirth"
                      control={form.control}
                      placeholder="yyyy-mm-dd"
                      label='Date of Birth'
                    />
                    <CustomInput
                      name="ssn"
                      control={form.control}
                      placeholder="ex: 1234"
                      label='SSN'
                    />
                  </div>

                </>
              )}
              <CustomInput
                name="email"
                control={form.control}
                placeholder="Enter your email"
                label='Email'
              />
              <CustomInput
                name="password"
                control={form.control}
                placeholder="Enter your password"
                label='Password'
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>

            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up'
              : "/sign-in"} className="form-link">
              {type == 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm
