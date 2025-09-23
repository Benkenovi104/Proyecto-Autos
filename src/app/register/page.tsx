"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/app/componentes/auth/LoginForm"
import { RegisterForm } from "@/app/componentes/auth/RegisterForm"

export default function RegisterPage() {
  const [isLogin, setIsLogin] = useState(false) // Empezar en registro
  const router = useRouter()

  const handleAuthSuccess = (token: string, user: Record<string, unknown>) => {
    console.log('Auth success, token received:', !!token)
    
    // Guardar token en cookie con configuración más robusta
    const isProduction = window.location.hostname !== 'localhost'
    const cookieOptions = [
      `auth-token=${token}`,
      'path=/',
      `max-age=${7 * 24 * 60 * 60}`, // 7 días
      isProduction ? 'secure' : '', // Solo HTTPS en producción
      'samesite=lax'
    ].filter(Boolean).join('; ')
    
    document.cookie = cookieOptions
    
    // Guardar datos del usuario en localStorage (opcional)
    localStorage.setItem('user', JSON.stringify(user))
    
    // Redirigir al dashboard - usar window.location en producción para forzar reload
    if (isProduction) {
      // En producción, usar window.location para forzar el reload
      window.location.href = '/dashboard'
    } else {
      // En desarrollo, usar router.push
      router.push('/dashboard')
    }
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