import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CoursePage from './pages/CoursePage';
import { Toaster } from './components/ui/sonner';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}