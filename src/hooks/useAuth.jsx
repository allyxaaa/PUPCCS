import { createContext, useContext, useEffect, useState } from 'react'
<<<<<<< HEAD
import { supabase } from '../config/supabase.js'
=======
import { supabase } from '../lib/supabase'
>>>>>>> dev-avery

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
<<<<<<< HEAD
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
=======
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
>>>>>>> dev-avery
    })

    return () => subscription.unsubscribe()
  }, [])

<<<<<<< HEAD
  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
=======
  const signIn = (email, password) =>
    supabase.auth.signInWithPassword({ email, password })

  const signOut = () => supabase.auth.signOut()

  return (
    <AuthContext.Provider value={{ session, signIn, signOut }}>
>>>>>>> dev-avery
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
<<<<<<< HEAD
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
=======
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
>>>>>>> dev-avery
