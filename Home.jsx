import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Dance2This</h1>
      <Link to="/studio" className="px-4 py-2 bg-blue-500 text-white rounded">Enter Studio</Link>
    </div>
  )
}