"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      // Cargar estadísticas con manejo de errores individual
      const autosRes = await fetch('/api/autos');
      const usuariosRes = await fetch('/api/usuarios');
      const trabajosRes = await fetch('/api/trabajos');
      const repuestosRes = await fetch('/api/repuestos');

      // Verificar si las respuestas son exitosas
      let autos = [];
      let usuarios = [];
      let trabajos = [];
      let repuestos = [];

      if (autosRes.ok) {
        try {
          autos = await autosRes.json();
        } catch (e) {
          console.error('Error parsing autos JSON:', e);
          autos = [];
        }
      }

      if (usuariosRes.ok) {
        try {
          usuarios = await usuariosRes.json();
        } catch (e) {
          console.error('Error parsing usuarios JSON:', e);
          usuarios = [];
        }
      }

      if (trabajosRes.ok) {
        try {
          trabajos = await trabajosRes.json();
        } catch (e) {
          console.error('Error parsing trabajos JSON:', e);
          trabajos = [];
        }
      }

      if (repuestosRes.ok) {
        try {
          repuestos = await repuestosRes.json();
        } catch (e) {
          console.error('Error parsing repuestos JSON:', e);
          repuestos = [];
        }
      }

      // Calcular repuestos con stock bajo (stock <= 10)
      const repuestosBajos = repuestos.filter((r: any) => r.stock <= 10).length

      setStats({
        totalAutos: autos.length || 0,
        totalUsuarios: usuarios.length || 0,
        trabajosActivos: trabajos.filter((t: any) => t.Estados?.nombre === 'En proceso').length || 0,
        repuestosBajos: repuestosBajos
      })

      // Cargar trabajos recientes (últimos 5) con datos completos
      const trabajosRecientes = trabajos
        .sort((a: any, b: any) => {
          const fechaA = a.fecha_ingreso ? new Date(a.fecha_ingreso).getTime() : 0;
          const fechaB = b.fecha_ingreso ? new Date(b.fecha_ingreso).getTime() : 0;
          return fechaB - fechaA;
        })
        .slice(0, 5)
        .map((trabajo: any) => ({
          id: trabajo.id,
          auto: trabajo.Autos ? `${trabajo.Autos.marca} ${trabajo.Autos.modelo}` : 'Vehículo no asignado',
          cliente: trabajo.Autos?.Usuarios ? `${trabajo.Autos.Usuarios.nombre} ${trabajo.Autos.Usuarios.apellido}` : 'Cliente no asignado',
          estado: trabajo.Estados?.nombre || 'Sin estado',
          fecha: trabajo.fecha_ingreso ? 
            (() => {
              try {
                // Si la fecha viene en formato ISO string, extraemos solo la parte de la fecha
                const fechaStr = trabajo.fecha_ingreso.toString();
                if (fechaStr.includes('T')) {
                  // Formato: "2024-01-12T00:00:00.000Z" -> "2024-01-12"
                  const soloFecha = fechaStr.split('T')[0];
                  const [year, month, day] = soloFecha.split('-');
                  return `${day}/${month}/${year}`;
                } else if (fechaStr.includes('-')) {
                  // Formato: "2024-01-12" 
                  const [year, month, day] = fechaStr.split('-');
                  return `${day}/${month}/${year}`;
                } else {
                  return 'Formato de fecha no válido';
                }
              } catch (error) {
                console.error('Error parsing date:', trabajo.fecha_ingreso, error);
                return 'Error en fecha';
              }
            })() : 
            'Sin fecha'
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
            <div className="text-lg text-black">Cargando dashboard...</div>
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
          <h1 className="text-3xl font-bold text-black mb-2">Dashboard</h1>
          <p className="text-black">Resumen general del sistema AutoGest</p>
        </div>

        {/* Estadísticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Total Autos</CardTitle>
              <Car className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">{stats.totalAutos}</div>
              <p className="text-xs text-black">Registrados en el sistema</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Usuarios</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">{stats.totalUsuarios}</div>
              <p className="text-xs text-black">Usuarios activos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Trabajos Activos</CardTitle>
              <Wrench className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">{stats.trabajosActivos}</div>
              <p className="text-xs text-black">En proceso</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Repuestos Bajos</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-black">{stats.repuestosBajos}</div>
              <p className="text-xs text-black">Stock bajo</p>
            </CardContent>
          </Card>
        </div>

        {/* Trabajos recientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-black">
              Trabajos Recientes
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-1" />
                Nuevo Trabajo
              </Button>
            </CardTitle>
            <CardDescription className="text-black">
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
                          <p className="font-medium text-black">{trabajo.auto}</p>
                          <p className="text-sm text-black">Cliente: {trabajo.cliente}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge className={getEstadoBadgeColor(trabajo.estado)}>
                        {trabajo.estado}
                      </Badge>
                      <span className="text-sm text-black">{trabajo.fecha}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-black">
                No hay trabajos recientes
              </div>
            )}
          </CardContent>
        </Card>

        {/* Accesos rápidos */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-black">Accesos Rápidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push('/autos')}
            >
              <CardContent className="p-6 text-center">
                <Car className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium text-black">Gestión de Autos</h3>
                <p className="text-sm text-black mt-1">Administrar vehículos</p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push('/repuestos')}
            >
              <CardContent className="p-6 text-center">
                <Wrench className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                <h3 className="font-medium text-black">Gestión de Repuestos</h3>
                <p className="text-sm text-black mt-1">Control de inventario</p>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push('/usuarios')}
            >
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-medium text-black">Gestión de Usuarios</h3>
                <p className="text-sm text-black mt-1">Administrar usuarios</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}