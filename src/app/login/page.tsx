"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/app/componentes/auth/LoginForm"
import { RegisterForm } from "@/app/componentes/auth/RegisterForm"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const handleAuthSuccess = (token: string, user: Record<string, unknown>) => {
    console.log('Auth success, token received:', !!token)
    console.log('User data:', user)
    
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
    console.log('Cookie set:', cookieOptions)
    
    // Guardar datos del usuario en localStorage (opcional)
    localStorage.setItem('user', JSON.stringify(user))
    console.log('User data saved to localStorage')
    
    // Redirigir al dashboard - usar window.location en producción para forzar reload
    console.log('Redirecting to dashboard...')
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