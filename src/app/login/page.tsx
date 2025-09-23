"use client"

import { useState } from "react"
import { LoginForm } from "@/app/componentes/auth/LoginForm"
import { RegisterForm } from "@/app/componentes/auth/RegisterForm"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthSuccess = async (token: string, user: Record<string, unknown>) => {
    console.log('Auth success, token received:', !!token)
    console.log('User data:', user)
    
    // Guardar datos del usuario en localStorage (opcional para acceso rápido)
    localStorage.setItem('user', JSON.stringify(user))
    console.log('User data saved to localStorage')
    
    // La cookie ya se estableció del lado del servidor, redirigir directamente
    console.log('Redirecting to dashboard...')
    // Usar window.location para asegurar que la página se recarga y middleware pueda leer la cookie
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm
            onSuccess={handleAuthSuccess}
            onSwitchToRegister={() => setIsLogin(false)}
          />
        ) : (
          <RegisterForm
            onSuccess={handleAuthSuccess}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  )
}