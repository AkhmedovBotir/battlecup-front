import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import VerifyPhone from './pages/VerifyPhone'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ProfileStatistics from './pages/ProfileStatistics'
import ProfileInfo from './pages/ProfileInfo'
import NotFound from './pages/NotFound'
import MatchList from './components/profile/profileMatchlist'
import MatchDetails from './pages/MatchDetails'

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
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Navigate to="info" />} />
          <Route path="info" element={<ProfileInfo />} />
          <Route path="statistics" element={<ProfileStatistics />} />
          <Route path="matches" element={<MatchList />} />
          <Route path="awards" element={<div className='text-white'>Mukofotlar tez orada...</div>} />
          <Route path="forums" element={<div className='text-white'>Forum postlari tez orada...</div>} />
        </Route>
        <Route path="/matches/:matchId" element={<MatchDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
