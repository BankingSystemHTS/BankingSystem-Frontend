import React from 'react'

const FormField = () => {
  return (
    
      <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="form-item">
                    <FormLabel className="form-label">
                      Password
                    </FormLabel>
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input placeholder="Your password" {...field} />
                      </FormControl>
                      <FormDescription className="form-message mt-2"/>
                    </div>

                  </div>
                  
                )}
              />
    
  )
}

export default FormField
