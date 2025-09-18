"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/app/componentes/ui/button"
import { LogOut } from "lucide-react"

export function Header() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Cargar datos del usuario desde localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    // Eliminar cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    // Eliminar datos del localStorage
    localStorage.removeItem('user')
    // Redirigir al login
    router.push('/login')
  }

  return (
    <header className="bg-red-500 text-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">AutoGest</h1>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-white hover:bg-red-600 bg-white/20 rounded-full px-6">
                Dashboard
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Gestión de Autos
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Gestión de Repuestos
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Usuarios
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Técnicos
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              {user ? `${user.nombre} ${user.apellido}` : 'Usuario'}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-red-600"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-1" />
              Salir
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
