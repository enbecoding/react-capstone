import React from 'react'
import "./App.css";
import Signup from "./components/auth/SignUp";
import { AuthProvider } from "./store/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homeComponents/Home";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import ForgotPassword from "./components/auth/ForgotPassword";

function App() {

  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
