import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export default function Container() {
  return (
    <>
      <Toaster richColors duration={7500} position='top-center' />
      <main>
        <Outlet />
      </main>
    </>
  )
}
