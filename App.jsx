import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Studio from './pages/Studio'
import Subscribe from './pages/Subscribe'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  )
}