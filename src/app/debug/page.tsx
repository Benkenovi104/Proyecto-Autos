"use client"

import { useEffect, useState } from "react"

export default function DebugPage() {
  const [cookies, setCookies] = useState<string>('')
  const [localStorage, setLocalStorage] = useState<string>('')
  const [environment, setEnvironment] = useState<string>('')

  useEffect(() => {
    // Obtener cookies
    setCookies(document.cookie || 'No cookies found')
    
    // Obtener localStorage
    const user = window.localStorage.getItem('user')
    setLocalStorage(user || 'No user data in localStorage')
    
    // Obtener info del ambiente
    setEnvironment(window.location.hostname)
  }, [])

  const testAuth = async () => {
    try {
      const response = await fetch('/api/test-db')
      const data = await response.json()
      console.log('Test response:', data)
    } catch (error) {
      console.error('Test error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Debug Information</h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Environment</h2>
            <p className="font-mono text-sm bg-gray-100 p-3 rounded">
              Hostname: {environment}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p className="font-mono text-sm bg-gray-100 p-3 rounded break-all">
              {cookies}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">LocalStorage</h2>
            <p className="font-mono text-sm bg-gray-100 p-3 rounded break-all">
              {localStorage}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Actions</h2>
            <div className="space-x-4">
              <button
                onClick={testAuth}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Test Auth API
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => window.location.href = '/login'}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}