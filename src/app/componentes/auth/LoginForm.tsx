"use client"

import { useState } from "react"
import { Button } from "@/app/componentes/ui/button"
import { Input } from "@/app/componentes/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { loginSchema, type LoginData } from "@/lib/validations/auth"
import { Eye, EyeOff, LogIn, Mail, Lock } from "lucide-react"

interface LoginFormProps {
  onSuccess: (token: string, user: any) => void
  onSwitchToRegister: () => void
}

export function LoginForm({ onSuccess, onSwitchToRegister }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginData>({
    mail: "",
    password: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
      // Validar datos del lado cliente
      const validatedData = loginSchema.parse(formData)

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.details?.issues) {
          const fieldErrors: Record<string, string> = {}
          data.details.issues.forEach((issue: any) => {
            fieldErrors[issue.path[0]] = issue.message
          })
          setErrors(fieldErrors)
        } else {
          setErrors({ submit: data.error || 'Error en el login' })
        }
        return
      }

      onSuccess(data.token, data.user)
    } catch (error: any) {
      if (error.issues) {
        const fieldErrors: Record<string, string> = {}
        error.issues.forEach((issue: any) => {
          fieldErrors[issue.path[0]] = issue.message
        })
        setErrors(fieldErrors)
      } else {
        setErrors({ submit: 'Error de conexión' })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <LogIn className="w-8 h-8 text-blue-600" />
        </div>
        <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
        <p className="text-sm text-gray-600 text-center">
          Ingresa a tu cuenta de AutoGest
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="mail" className="text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="mail"
                name="mail"
                type="email"
                placeholder="tu@email.com"
                value={formData.mail}
                onChange={handleChange}
                className={`pl-10 ${errors.mail ? 'border-red-500' : ''}`}
                required
              />
            </div>
            {errors.mail && (
              <p className="text-xs text-red-500">{errors.mail}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Tu contraseña"
                value={formData.password}
                onChange={handleChange}
                className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
          </div>

          {errors.submit && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-700">{errors.submit}</p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              ¿No tienes cuenta? Regístrate
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}