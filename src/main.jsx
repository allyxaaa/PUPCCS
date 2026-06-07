import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import { AuthProvider } from './hooks/useAuth.jsx'
=======
import { AuthProvider } from './context/useAuth.jsx'
>>>>>>> dev-avery

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
<<<<<<< HEAD
)
=======
)
>>>>>>> dev-avery
