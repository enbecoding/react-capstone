import "./App.css";
import Signup from './components/auth/SignUp'
import { Container } from "react-bootstrap";
import { AuthProvider } from "./store/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/homeComponents/Home'
import Login from './components/auth/Login'

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
