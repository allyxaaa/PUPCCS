import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import { LogIn } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: err } = await signIn(email, password)
    setLoading(false)

    if (err) {
      setError('Invalid email or password. Please try again.')
    } else {
      navigate('/admin/dashboard')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-maroon px-4"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-maroon/85" />

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/pup-logo.png"
            alt="PUP Logo"
            className="w-20 h-20 object-contain mx-auto mb-3 drop-shadow"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <h1 className="text-white text-2xl font-bold">PUP Clinic</h1>
          <p className="text-gold text-sm">Admin Portal</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Welcome back</h2>
          <p className="text-gray-400 text-sm mb-6">Sign in to your admin account</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="admin@pup.edu.ph"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="input-field"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <LogIn className="w-4 h-4" />
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
