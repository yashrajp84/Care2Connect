import { Outlet } from 'react-router-dom'
import BottomNav from '../components/ui/BottomNav'

export default function Layout() {
  return (
    <div style={{ paddingBottom: '64px' /* space for bottom nav */ }}>
      <Outlet />
      <BottomNav />
    </div>
  )
}
