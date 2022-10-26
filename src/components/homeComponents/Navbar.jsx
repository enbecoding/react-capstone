import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import styles from "./Header.module.css"
import { useAuth } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const navigate = useNavigate()
  
  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate("/login")
    } catch {
      setError('Failed to log out')
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