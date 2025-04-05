import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../auth/Login'
import Profile from '../pages/Profile'
import Analytics from '../pages/Analytics'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default Routing
