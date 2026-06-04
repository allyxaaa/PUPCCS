import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AppointmentForm from './components/AppointmentForm.jsx' 
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Appointments from './pages/Appointments.jsx'
import Patients from './pages/Patients.jsx'
import Calendar from './pages/Calendar.jsx'
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
