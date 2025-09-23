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
    
    // Verificar si la cookie se estableció del lado del servidor
    const cookieCheck = document.cookie.includes('auth-token=')
    console.log('Server-side cookie check:', cookieCheck)
    
    if (!cookieCheck) {
      console.log('Server cookie not found, setting client-side as fallback')
      // Fallback: establecer cookie del lado del cliente si el servidor falló
      const isProduction = window.location.hostname.includes('vercel.app')
      const cookieOptions = [
        `auth-token=${token}`,
        'path=/',
        `max-age=${7 * 24 * 60 * 60}`, // 7 días
        isProduction ? 'secure' : '',
        'samesite=lax'
      ].filter(Boolean).join('; ')
      
      document.cookie = cookieOptions
      console.log('Client-side cookie set:', cookieOptions)
    }
    
    // Esperar un momento para asegurar que la cookie esté disponible
    setTimeout(() => {
      console.log('Final cookie verification:', document.cookie.includes('auth-token='))
      console.log('Redirecting to dashboard...')
      // Usar window.location para asegurar que la página se recarga y middleware pueda leer la cookie
      window.location.href = '/dashboard'
    }, 200)
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