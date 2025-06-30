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
export default function App() {
    return (
        <div>
              <h1>Welcome to Dance2This!</h1>
                    <p>This is your React app up and running. 🎉</p>
                        </div>
                          );
                          }
