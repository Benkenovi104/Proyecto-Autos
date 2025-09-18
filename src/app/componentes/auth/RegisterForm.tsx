"use client"

import { useState } from "react"
import { Button } from "@/app/componentes/ui/button"
import { Input } from "@/app/componentes/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { registerSchema, type RegisterData } from "@/lib/validations/auth"
import { Eye, EyeOff, UserPlus, Mail, Lock, User, Phone } from "lucide-react"

interface RegisterFormProps {
  onSuccess: (token: string, user: any) => void
  onSwitchToLogin: () => void
}

export function RegisterForm({ onSuccess, onSwitchToLogin }: RegisterFormProps) {
  const [formData, setFormData] = useState<RegisterData>({
    nombre: "",
    apellido: "",
    mail: "",
    telefono: "",
    password: "",
    confirmPassword: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
      // Validar datos del lado cliente
      const validatedData = registerSchema.parse(formData)

      const response = await fetch('/api/auth/register', {
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
          setErrors({ submit: data.error || 'Error en el registro' })
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
          <UserPlus className="w-8 h-8 text-blue-600" />
        </div>
        <CardTitle className="text-2xl text-center">Crear Cuenta</CardTitle>
        <p className="text-sm text-gray-600 text-center">
          Registrate para acceder a AutoGest
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`pl-10 ${errors.nombre ? 'border-red-500' : ''}`}
                  required
                />
              </div>
              {errors.nombre && (
                <p className="text-xs text-red-500">{errors.nombre}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="apellido" className="text-sm font-medium">
                Apellido
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="apellido"
                  name="apellido"
                  type="text"
                  placeholder="Tu apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className={`pl-10 ${errors.apellido ? 'border-red-500' : ''}`}
                  required
                />
              </div>
              {errors.apellido && (
                <p className="text-xs text-red-500">{errors.apellido}</p>
              )}
            </div>
          </div>

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
            <label htmlFor="telefono" className="text-sm font-medium">
              Teléfono (opcional)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="+54 9 11 1234-5678"
                value={formData.telefono}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
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
                placeholder="Mínimo 8 caracteres"
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

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirmar Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
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
            {loading ? 'Registrando...' : 'Crear Cuenta'}
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              ¿Ya tienes cuenta? Inicia sesión
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}