import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { CalendarPlus, Clock, Shield, Heart, Phone, MapPin, Mail } from 'lucide-react'

const services = [
  { icon: Heart, title: 'Medical Consultation', desc: 'General check-up, fever, colds, and other medical concerns by our licensed physicians.' },
  { icon: '🦷', title: 'Dental Consultation', desc: 'Tooth extraction, oral check-up, and dental health services.' },
  { icon: '🧠', title: 'Mental Health', desc: 'Counseling and psychological support for students, faculty, and staff.' },
  { icon: '🧪', title: 'Laboratory Services', desc: 'Medical certificates and basic laboratory examinations.' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-white py-24 px-6"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-maroon/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/pup-logo.png"
              alt="PUP Logo"
              className="w-24 h-24 object-contain drop-shadow-lg"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            PUP Clinic
          </h1>
          <p className="text-gold text-xl font-semibold mb-3">
            Your Health, Our Priority
          </p>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8">
            Providing quality healthcare services to the PUP community —
            students, faculty, and staff.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 bg-gold text-maroon font-bold px-8 py-3 rounded-xl text-base hover:bg-gold-dark transition-colors shadow-lg"
          >
            <CalendarPlus className="w-5 h-5" />
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white border-b py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-5 h-5 text-maroon" />
            <p className="font-semibold text-sm">Clinic Hours</p>
            <p className="text-gray-500 text-xs">Mon–Fri, 8:00 AM – 5:00 PM</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-5 h-5 text-maroon" />
            <p className="font-semibold text-sm">Location</p>
            <p className="text-gray-500 text-xs">Main Building, Ground Floor, PUP Manila</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Phone className="w-5 h-5 text-maroon" />
            <p className="font-semibold text-sm">Contact</p>
            <p className="text-gray-500 text-xs">(02) 8335-1786 loc. 123</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-maroon">Our Services</h2>
            <p className="text-gray-500 text-sm mt-2">Comprehensive healthcare for the PUP community</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">
                  {typeof s.icon === 'string' ? s.icon : <s.icon className="w-8 h-8 text-maroon mx-auto" />}
                </div>
                <h3 className="font-semibold text-sm text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-maroon text-white py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Book an Appointment?</h2>
          <p className="text-white/75 text-sm mb-6">
            Fill out our online form and we'll confirm your schedule within 24 hours.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 bg-gold text-maroon font-bold px-8 py-3 rounded-xl hover:bg-gold-dark transition-colors"
          >
            <CalendarPlus className="w-5 h-5" />
            Book Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-maroon-dark text-white/60 py-6 px-6 text-center text-xs">
        <p>© {new Date().getFullYear()} PUP Clinic — Polytechnic University of the Philippines</p>
        <p className="mt-1">Sta. Mesa, Manila · All Rights Reserved</p>
      </footer>
    </div>
  )
}
