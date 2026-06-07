import { Link, useLocation } from 'react-router-dom'
import { CalendarPlus, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-maroon text-white shadow-lg" style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #FFD700, #e6c200, #FFD700) 1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/pup-logo.png"
              alt="PUP Logo"
              className="w-9 h-9 object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div>
              <span className="font-bold text-lg leading-tight block">PUPCare Clinic</span>
              <span className="text-gold text-[10px] leading-tight block uppercase tracking-wider">Polytechnic University of the Philippines</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/services" className={`text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-gold' : 'text-white/80 hover:text-white'}`}>
              Services
            </Link>
            <Link to="/appointment" className="flex items-center gap-2 bg-gold text-maroon px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-dark transition-colors">
              <CalendarPlus className="w-4 h-4" />
              Book Appointment
            </Link>
            <Link to="/admin/login" className="text-sm font-medium text-white/80 hover:text-white border-l border-white/20 pl-4">
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-maroon-light transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden pb-4 flex flex-col gap-3">
            <Link to="/services" className="text-sm font-medium text-white/80" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/appointment" className="flex items-center gap-2 bg-gold text-maroon px-4 py-2 rounded-lg text-sm font-semibold w-fit" onClick={() => setMenuOpen(false)}>
              <CalendarPlus className="w-4 h-4" /> Book Appointment
            </Link>
            <Link to="/admin/login" className="text-sm font-medium text-white/80" onClick={() => setMenuOpen(false)}>Admin Portal</Link>
          </div>
        )}
      </div>
    </nav>
  )
}