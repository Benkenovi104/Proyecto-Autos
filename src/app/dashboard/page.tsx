"use client"

import { useState, useEffect } from "react"
import { Header } from "@/app/componentes/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Button } from "@/app/componentes/ui/button"
import { Badge } from "@/app/componentes/ui/badge"
import { Car, Users, Wrench, AlertTriangle, Plus, Search } from "lucide-react"

interface DashboardStats {
  totalAutos: number
  totalUsuarios: number
  trabajosActivos: number
  repuestosBajos: number
}

interface RecentWork {
  id: number
  auto: string
  cliente: string
  estado: string
  fecha: string
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAutos: 0,
    totalUsuarios: 0,
    trabajosActivos: 0,
    repuestosBajos: 0
  })
  const [recentWork, setRecentWork] = useState<RecentWork[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      // Cargar estadísticas
      const [autosRes, usuariosRes, trabajosRes] = await Promise.all([
        fetch('/api/autos'),
        fetch('/api/usuarios'),
        fetch('/api/trabajos')
      ])

      const autos = await autosRes.json()
      const usuarios = await usuariosRes.json()
      const trabajos = await trabajosRes.json()

      setStats({
        totalAutos: autos.length || 0,
        totalUsuarios: usuarios.length || 0,
        trabajosActivos: trabajos.filter((t: any) => t.estado === 'En proceso').length || 0,
        repuestosBajos: 5 // Placeholder
      })

      // Cargar trabajos recientes (últimos 5)
      const trabajosRecientes = trabajos.slice(0, 5).map((trabajo: any) => ({
        id: trabajo.id,
        auto: `${trabajo.auto?.marca || 'N/A'} ${trabajo.auto?.modelo || ''}`,
        cliente: `${trabajo.auto?.usuario?.nombre || 'N/A'} ${trabajo.auto?.usuario?.apellido || ''}`,
        estado: trabajo.estado || 'Pendiente',
        fecha: new Date(trabajo.fechaCreacion).toLocaleDateString()
      }))

      setRecentWork(trabajosRecientes)
      setLoading(false)
    } catch (error) {
      console.error('Error loading dashboard data:', error)
      setLoading(false)
    }
  }

  const getEstadoBadgeColor = (estado: string) => {
    switch (estado) {
      case 'Completado': return 'bg-green-100 text-green-800'
      case 'En proceso': return 'bg-blue-100 text-blue-800'
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Cargando dashboard...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Resumen general del sistema AutoGest</p>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Autos</CardTitle>
              <Car className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalAutos}</div>
              <p className="text-xs text-gray-600">Registrados en el sistema</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuarios</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsuarios}</div>
              <p className="text-xs text-gray-600">Usuarios activos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trabajos Activos</CardTitle>
              <Wrench className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.trabajosActivos}</div>
              <p className="text-xs text-gray-600">En proceso</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Repuestos Bajos</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.repuestosBajos}</div>
              <p className="text-xs text-gray-600">Stock bajo</p>
            </CardContent>
          </Card>
        </div>

        {/* Trabajos recientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Trabajos Recientes
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-1" />
                Nuevo Trabajo
              </Button>
            </CardTitle>
            <CardDescription>
              Últimos trabajos registrados en el sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentWork.length > 0 ? (
              <div className="space-y-4">
                {recentWork.map((trabajo) => (
                  <div key={trabajo.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{trabajo.auto}</p>
                          <p className="text-sm text-gray-600">Cliente: {trabajo.cliente}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getEstadoBadgeColor(trabajo.estado)}>
                        {trabajo.estado}
                      </Badge>
                      <span className="text-sm text-gray-500">{trabajo.fecha}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No hay trabajos recientes
              </div>
            )}
          </CardContent>
        </Card>

        {/* Accesos rápidos */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Accesos Rápidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Car className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium">Gestión de Autos</h3>
                <p className="text-sm text-gray-600 mt-1">Administrar vehículos</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Wrench className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium">Gestión de Repuestos</h3>
                <p className="text-sm text-gray-600 mt-1">Control de inventario</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium">Gestión de Usuarios</h3>
                <p className="text-sm text-gray-600 mt-1">Administrar usuarios</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}