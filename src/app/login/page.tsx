"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/app/componentes/auth/LoginForm"
import { RegisterForm } from "@/app/componentes/auth/RegisterForm"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const handleAuthSuccess = (token: string, user: any) => {
    // Guardar token en cookie
    document.cookie = `auth-token=${token}; path=/; max-age=${7 * 24 * 60 * 60}` // 7 días
    
    // Guardar datos del usuario en localStorage (opcional)
    localStorage.setItem('user', JSON.stringify(user))
    
    // Redirigir al dashboard
    router.push('/dashboard')
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