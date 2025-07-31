import { NavLink } from 'react-router-dom'
import './BottomNav.css'

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className="nav-item">
        {({ isActive }) => (
          <>
            <span className="nav-icon">❗</span>
            <span className={`nav-label ${isActive ? 'active' : ''}`}>Scenarios</span>
          </>
        )}
      </NavLink>

      <NavLink to="/about" className="nav-item">
        {({ isActive }) => (
          <>
            <span className="nav-icon">🏢</span>
            <span className={`nav-label ${isActive ? 'active' : ''}`}>About</span>
          </>
        )}
      </NavLink>

      <NavLink to="/learn" className="nav-item">
        {({ isActive }) => (
          <>
            <span className="nav-icon">📖</span>
            <span className={`nav-label ${isActive ? 'active' : ''}`}>Learn</span>
          </>
        )}
      </NavLink>

      <NavLink to="/support" className="nav-item">
        {({ isActive }) => (
          <>
            <span className="nav-icon">📞</span>
            <span className={`nav-label ${isActive ? 'active' : ''}`}>Support</span>
          </>
        )}
      </NavLink>
    </nav>
  )
}
