import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../components/auth/firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState("")
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
     auth.signInWithEmailAndPassword(email, password).then((usercredentials) => {
      setCurrentUser(usercredentials.user)
     })
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(user => {
       setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
