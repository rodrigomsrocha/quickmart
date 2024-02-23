import { ShoppingCart, Storefront } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="p-4 flex justify-between">
      <h1 className="flex gap-2 items-center text-2xl">
        <Storefront size={32} />
        Quickmart
      </h1>
      <nav className="flex items-center gap-4">
        <Button variant="link">
          <Link to="/men">Men</Link>
        </Button>
        <Button variant="link">
          <Link to="/women">Women</Link>
        </Button>
        <Button variant="link">
          <Link to="/accessories">Accessories</Link>
        </Button>
      </nav>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <ShoppingCart size={24} />
        </Button>
        <Button>Login</Button>
      </div>
    </header>
  )
}
