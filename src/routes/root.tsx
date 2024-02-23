import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function Root() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}
