import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export default function Container() {
  return (
    <>
      <Toaster richColors duration={7500} position='top-center' />
      <div className='main-container'>
        <div className='pebble-bl'></div>
        <div className='pebble-br'></div>
        <div className='overlay'></div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
