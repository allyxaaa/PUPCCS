import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, CalendarDays, Users, ClipboardList, LogOut } from 'lucide-react'
import { useAuth } from '../context/useAuth.jsx'
import { useNavigate } from 'react-router-dom'

const navItems = [
  { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/admin/appointments', icon: ClipboardList, label: 'Appointments' },
  { path: '/admin/patients', icon: Users, label: 'Patients' },
  { path: '/admin/calendar', icon: CalendarDays, label: 'Calendar' },
]

export default function AdminSidebar() {
  const location = useLocation()
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/admin/login')
  }

  return (
    <aside className="w-64 min-h-screen bg-maroon text-white flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="/pup-logo.png"
            alt="PUP Logo"
            className="w-10 h-10 object-contain"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <div>
            <p className="font-bold text-base leading-tight">PUP Clinic</p>
            <p className="text-gold text-xs leading-tight">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path
          return (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                active
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Sign out */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all w-full"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
