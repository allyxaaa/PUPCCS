<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom'
import { CalendarPlus, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-maroon text-white shadow-lg">
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
              <span className="font-bold text-lg leading-tight block">PUP Clinic</span>
              <span className="text-gold text-xs leading-tight block">Polytechnic University of the Philippines</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-gold text-maroon px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-dark transition-colors"
            >
              <CalendarPlus className="w-4 h-4" />
              Book Appointment
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
            <Link to="/" className="text-sm font-medium text-white/80 hover:text-white" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/appointment"
              className="flex items-center gap-2 bg-gold text-maroon px-4 py-2 rounded-lg text-sm font-semibold w-fit"
              onClick={() => setMenuOpen(false)}
            >
              <CalendarPlus className="w-4 h-4" />
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav className="bg-maroon text-white py-4 px-6 shadow-md flex justify-between items-center" style={{ borderBottom: '3px solid transparent', borderImage: 'linear-gradient(to right, #FFD700, #e6c200, #FFD700) 1' }}>
    <div className="flex items-center gap-3">
  <img
    src="/pup-logo.png"
    alt="PUP Logo"
    className="w-10 h-10 object-contain"
  />
  <div>
    <h1 className="text-xl font-bold leading-tight">PUPCare Clinic</h1>
    <p className="text-xs text-gold">Polytechnic University of the Philippines</p>
  </div>
</div>
      <div className="flex gap-4">
        <Link
          to="/services"
          className="bg-gold text-maroon font-bold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors text-sm shadow"
        >
          Services
        </Link>
        <Link
          to="/admin/login"
          className="bg-gold text-maroon font-bold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors text-sm shadow"
        >
          Admin Portal
        </Link>
      </div>
    </nav>
  );
}
>>>>>>> dev-avery
