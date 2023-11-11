import { Outlet } from 'react-router-dom'

export default function Container () {
  return (
    <div className='main-container'>
      <div className='pebble-bl'></div>
      <div className='pebble-br'></div>
      <div className='overlay'></div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
