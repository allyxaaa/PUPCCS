import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/public/Home.jsx'
import AppointmentForm from './pages/public/AppointmentForm.jsx'
import Login from './pages/admin/Login.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Appointments from './pages/admin/Appointments.jsx'
import Patients from './pages/admin/Patients.jsx'
import Calendar from './pages/admin/Calendar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<AppointmentForm />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/admin/appointments" element={
          <ProtectedRoute><Appointments /></ProtectedRoute>
        } />
        <Route path="/admin/patients" element={
          <ProtectedRoute><Patients /></ProtectedRoute>
        } />
        <Route path="/admin/calendar" element={
          <ProtectedRoute><Calendar /></ProtectedRoute>
        } />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
