<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AppointmentForm from './components/AppointmentForm.jsx' 
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Appointments from './pages/Appointments.jsx'
import Patients from './pages/Patients.jsx'
import Calendar from './pages/Calendar.jsx'
=======
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/public/Home.jsx'
import Services from './pages/public/Services.jsx'
import AppointmentForm from './pages/public/AppointmentForm.jsx'
import Login from './pages/admin/Login.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import Appointments from './pages/admin/Appointments.jsx'
import Patients from './pages/admin/Patients.jsx'
import Calendar from './pages/admin/Calendar.jsx'
>>>>>>> dev-avery
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
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
=======
        {/* Public */}
        <Route path="/"            element={<Home />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/appointment" element={<AppointmentForm />} />

        {/* Admin auth */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin protected — ProtectedRoute wraps an <Outlet /> */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index                element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard"    element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients"     element={<Patients />} />
          <Route path="calendar"     element={<Calendar />} />
        </Route>

>>>>>>> dev-avery
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> dev-avery
