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
import PlayStyleTimeline from './pages/PlayStyleTimeline'
import {Overview} from './pages/Overview'
import Chat from './pages/Chat'
import { usePerformanceMetrics } from './hooks/usePerformanceMetrics';

export default function App() {
  usePerformanceMetrics();
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
        <Route path="/matches/:matchId" element={<MatchDetails />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="playstyle" element={<PlayStyleTimeline />} />
          <Route path="items" element={<div>Items Content</div>} />
          <Route path="graph" element={<div>Graph Content</div>} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
