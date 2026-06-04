import { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar.jsx'
import { supabase } from '../config/supabase.js'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

export default function Patients() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setAppointments(data)
    setLoading(false)
  }

  // Group by id_number
  const grouped = appointments.reduce((acc, a) => {
    const key = a.id_number
    if (!acc[key]) {
      acc[key] = {
        id_number: a.id_number,
        full_name: a.full_name,
        email: a.email,
        contact_number: a.contact_number,
        type: a.type,
        department: a.department,
        visits: [],
      }
    }
    acc[key].visits.push(a)
    return acc
  }, {})

  const patients = Object.values(grouped).filter(p =>
    p.full_name.toLowerCase().includes(search.toLowerCase()) ||
    p.id_number.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
          <p className="text-gray-500 text-sm mt-1">View appointment history per patient</p>
        </div>

        {/* Search */}
        <div className="relative max-w-sm mb-6">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or ID..."
            className="input-field pl-9"
          />
        </div>

        <div className="card">
          {loading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : patients.length === 0 ? (
            <p className="text-sm text-gray-400">No patients found.</p>
          ) : (
            <div className="space-y-3">
              {patients.map(p => (
                <div key={p.id_number} className="border border-gray-100 rounded-xl overflow-hidden">
                  {/* Patient row */}
                  <button
                    onClick={() => setExpanded(expanded === p.id_number ? null : p.id_number)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center text-maroon font-bold text-sm shrink-0">
                        {p.full_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{p.full_name}</p>
                        <p className="text-xs text-gray-400">{p.id_number} · {p.department} · <span className="capitalize">{p.type}</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        {p.visits.length} visit{p.visits.length !== 1 ? 's' : ''}
                      </span>
                      {expanded === p.id_number ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </div>
                  </button>

                  {/* History */}
                  {expanded === p.id_number && (
                    <div className="border-t bg-gray-50/50 px-5 py-4">
                      <p className="text-xs font-semibold text-gray-500 mb-3">Appointment History</p>
                      <div className="space-y-2">
                        {p.visits.map(v => (
                          <div key={v.id} className="flex items-start justify-between bg-white rounded-lg px-4 py-3 border border-gray-100">
                            <div>
                              <p className="text-sm font-medium text-gray-700 capitalize">{v.concern_type?.replace('_', ' ')}</p>
                              <p className="text-xs text-gray-400">{v.preferred_date} at {v.preferred_time}</p>
                              {v.concern_description && (
                                <p className="text-xs text-gray-500 mt-1">{v.concern_description}</p>
                              )}
                            </div>
                            <span className={`badge-${v.status} shrink-0 ml-3`}>{v.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
