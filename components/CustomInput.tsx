import React from 'react'

import { Control, FieldValues, FieldPath } from 'react-hook-form'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { authFormSchema } from '@/lib/utils'


const formSchema = authFormSchema('sign-up')

interface CustomInput {
   name: FieldPath<z.infer<typeof formSchema>>,
   label: string,
   placeholder?: string,
   // form: typeof Form
   control: Control<z.infer<typeof formSchema>>
}


const CustomInput = ({ name, label,  placeholder, control }: CustomInput) => {
   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <div className="form-item">
               <FormLabel className="form-label">
                  {label}
               </FormLabel>
               <div className="flex w-full flex-col">
                  <FormControl>
                     <Input placeholder={placeholder} {...field} />
                  </FormControl>
                  <FormDescription className="form-message mt-2" />
                  <FormMessage className="form-message mt-2"/>
               </div>

            </div>

         )}
      />
   )
}

export default CustomInput
