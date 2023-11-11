import { Outlet } from 'react-router-dom'

export default function Container () {
  return (
    <div>
        
      <main>
        <Outlet />
      </main>
    </div>
  )
}
