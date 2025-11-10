import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

import Home from './pages/Home';
import ChatList from './pages/chat/ChatList';
import PsycologistList from './pages/psychologists/PsycologistsList';
import FfttoStart from './pages/Fftto/FfttoStart';
import Ffff from './pages/Ffff/Ffff';
import Fftto from './pages/Fftto/Fftto';
import FfffStart from './pages/Ffff/FfffStart';
import DiaryFeelings from './pages/diaryFeelings/DiaryFeelings';
import DiaryFood from './pages/diaryFood/DiaryFood';
import Diary from './pages/diary/Diary';
import SupportNumbers from './pages/SupportNumbers/SupportNumbers';
import Header from './components/Header/Header';
import Events from './pages/Events/Events'
import Register from './pages/auth/Register';

import './App.css'
import Account from './pages/account/Account';

function App() {

  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  }

  return (
    <div className="wrapper">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path="/psycologist-list" element={<PsycologistList />} />
          <Route path="/5-4-3-2-1" element={<FfttoStart />} />
          <Route path="/4-4-4-4" element={<FfffStart />} />
          <Route path="/DiaryFeelings" element={<DiaryFeelings />} />
          <Route path="/DiaryFood" element={<DiaryFood />} />
          <Route path="/Diary" element={<Diary />} />
          <Route path="/Support-numbers" element={<SupportNumbers />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Ffff/Ffff" element={<Ffff />} />
          <Route path="/Fftto/Fftto" element={<Fftto />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Navigation />
      </Router >
    </div>
  )
}

export default App
