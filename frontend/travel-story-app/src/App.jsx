import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

// Define the Root component to handle the initial redirect
const Root = () => {
  // Check if token exists in localStorage
  // 双叹号强制转换为布尔值，存在token则返回true，否则返回false
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default App