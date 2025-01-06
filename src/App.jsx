import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import VerifyPhone from './pages/VerifyPhone'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PublicRoute = ({ children }) => {
    return isLoggedIn ? <Navigate to="/profile" /> : children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/verify-phone"
          element={
            <PublicRoute>
              <VerifyPhone />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PublicRoute>
              <Profile />
            </PublicRoute>
          }
        />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}
