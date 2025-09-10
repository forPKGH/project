import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { Auth } from '@supabase/auth-ui-react';
import Navigation from './components/Navigation/Navigation';

import Home from './pages/Home';
import Chat from './pages/Chat';
import PsycologistList from './pages/PsycologistsList';
import Fftto from './pages/fftto';
import Ffff from './pages/Ffff';
import DiaryFeelings from './pages/DiaryFeelings';
import DiaryFood from './pages/DiaryFood';
import Diary from './pages/Diary';
import Phones from './pages/Phones';

import './App.css'

function App() {
  // const [session, setSession] = useState(null)
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  //   return () => subscription.unsubscribe()
  // }, [])
  // if (!session) {
  //   return (<Auth supabaseClient={supabase} appearance={{ theme: "default" }} />)
  // }

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/psycologist-list" element={<PsycologistList />} />
          <Route path="/5-4-3-2-1" element={<Fftto />} />
          <Route path="/4-4-4-4" element={<Ffff />} />
          <Route path="/DiaryFeelings" element={<DiaryFeelings />} />
          <Route path="/DiaryFood" element={<DiaryFood />} />
          <Route path="/Diary" element={<Diary />} />
          <Route path="/Phones" element={<Phones />} />
        </Routes>
        <Navigation />
      </Router >
    </div>
  )
}

export default App
