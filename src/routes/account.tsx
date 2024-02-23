import { LoginForm } from '@/components/login-form'
import { SignUpForm } from '@/components/sign-up-form'
import { Button } from '@/components/ui/button'
import { Storefront } from '@phosphor-icons/react'
import { useState } from 'react'

export function Account() {
  const [isLoginFormActive, setIsLoginFormActive] = useState(false)

  function handleSwitchForms() {
    setIsLoginFormActive(!isLoginFormActive)
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-12 gap-8">
      <div className="bg-muted p-12 rounded-lg hidden lg:flex flex-col justify-between">
        <h1 className="text-2xl font-medium flex items-center gap-2">
          <Storefront size={28} weight="regular" />
          Quickmart
        </h1>
        <p className="text-lg max-w-[500px] font-medium">
          Your Instant Gateway to Effortless Shopping - Where Convenience Meets
          Savings!
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 justify-center max-w-md w-full mx-auto relative">
        <Button
          onClick={handleSwitchForms}
          className="absolute top-0 right-0"
          variant="ghost"
        >
          {isLoginFormActive ? 'Sign up' : 'Login'}
        </Button>
        {isLoginFormActive ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  )
}
