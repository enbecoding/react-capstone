import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./Header.module.css"
import { useAuth } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  
  async function handleLogout() {
    try {
      await logout()
      navigate("/login")
    } catch {
     
    }
  }

  return (
    <nav className={styles.nav}>
      <a href="/">Gotta Start Somewhere
      </a>
      <Button variant="link" onClick={handleLogout}>Log Out</Button>
    </nav>
  )
}

export default Navbar