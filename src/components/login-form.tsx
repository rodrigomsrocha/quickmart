import { zodResolver } from '@hookform/resolvers/zod'
import { GoogleLogo } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'

export function LoginForm() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="w-full space-y-6">
      <header className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">Login to your account</h1>
        <span className="text-muted-foreground text-sm">
          fill the form bellow to login to your account
        </span>
      </header>
      <Form {...form}>
        <form
          className="space-y-4 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Your name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button className="w-full" variant="outline">
        <GoogleLogo weight="bold" size={18} className="mr-4" />
        Google
      </Button>
    </div>
  )
}
