import { Button } from '@/components/ui/button'
import hero from '../assets/hero.jpg'

export function Home() {
  return (
    <div className="w-full p-4 pt-0">
      <div className="h-[600px] flex gap-4">
        <div className="flex-1 flex items-center justify-center bg-muted rounded-md p-4">
          <div className="flex max-w-[500px] flex-col items-start gap-2">
            <h1 className="text-4xl font-bold">
              Buy products at incredible prices
            </h1>
            <span className="text-muted-foreground text-lg">
              Shop over 500 brands, all in one place
            </span>
            <Button className="mt-8" size="lg">
              Shop now
            </Button>
          </div>
        </div>
        <div className="hidden lg:block overflow-hidden rounded-md w-1/2">
          <img className="w-full h-full object-cover" src={hero} alt="hero" />
        </div>
      </div>
    </div>
  )
}
