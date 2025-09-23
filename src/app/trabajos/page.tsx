"use client"

import { useState, useEffect, useCallback } from "react"
import { Header } from "@/app/componentes/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Button } from "@/app/componentes/ui/button"
import { Badge } from "@/app/componentes/ui/badge"
import { Input } from "@/app/componentes/ui/input"
import { Plus, Search, Edit, Trash2, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface Trabajo {
  id: number
  auto: string
  cliente: string
  estado: string
  fecha: string
  notas: string
  costo_mano_obra: number
  fecha_egreso?: string
}

interface TrabajoAPI {
  id: number
  Autos?: {
    marca: string
    modelo: string
    Usuarios?: {
      nombre: string
      apellido: string
    }
  }
  Estados?: {
    nombre: string
  }
  notas?: string
  costo_mano_obra?: number
  fecha_egreso?: string
  fecha_ingreso?: string
}

export default function TrabajosPage() {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const loadTrabajos = useCallback(async () => {
    try {
      const response = await fetch('/api/trabajos')
      if (response.ok) {
        const data: TrabajoAPI[] = await response.json()
        const trabajosFormateados = data.map((trabajo: TrabajoAPI) => ({
          id: trabajo.id,
          auto: trabajo.Autos ? `${trabajo.Autos.marca} ${trabajo.Autos.modelo}` : 'Vehículo no asignado',
          cliente: trabajo.Autos?.Usuarios ? `${trabajo.Autos.Usuarios.nombre} ${trabajo.Autos.Usuarios.apellido}` : 'Cliente no asignado',
          estado: trabajo.Estados?.nombre || 'Sin estado',
          notas: trabajo.notas || '',
          costo_mano_obra: trabajo.costo_mano_obra || 0,
          fecha_egreso: trabajo.fecha_egreso ? formatDate(trabajo.fecha_egreso) : '',
          fecha: trabajo.fecha_ingreso ? formatDate(trabajo.fecha_ingreso) : 'Sin fecha'
        }))
        setTrabajos(trabajosFormateados)
      }
    } catch (error) {
      console.error('Error loading trabajos:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTrabajos()
  }, [loadTrabajos])

  const formatDate = (dateString: string) => {
    try {
      const fechaStr = dateString.toString()
      if (fechaStr.includes('T')) {
        const soloFecha = fechaStr.split('T')[0]
        const [year, month, day] = soloFecha.split('-')
        return `${day}/${month}/${year}`
      } else if (fechaStr.includes('-')) {
        const [year, month, day] = fechaStr.split('-')
        return `${day}/${month}/${year}`
      }
      return fechaStr
    } catch {
      return 'Fecha inválida'
    }
  }

  const getEstadoBadgeColor = (estado: string) => {
    switch (estado.toLowerCase()) {
      case 'completado':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'en proceso':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'en espera de repuestos':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const handleDeleteTrabajo = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este trabajo?')) {
      try {
        const response = await fetch(`/api/trabajos/${id}`, { method: 'DELETE' })
        if (response.ok) {
          await loadTrabajos()
          alert('Trabajo eliminado exitosamente')
        } else {
          alert('Error al eliminar el trabajo')
        }
      } catch (error) {
        console.error('Error:', error)
        alert('Error al eliminar el trabajo')
      }
    }
  }

  const filteredTrabajos = trabajos.filter(trabajo =>
    trabajo.auto.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trabajo.cliente.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trabajo.estado.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Cargando trabajos...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Header de la página */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-black">Gestión de Trabajos</h1>
              <p className="text-gray-600">Administra todos los trabajos del taller</p>
            </div>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {/* TODO: Implementar modal de nuevo trabajo */}}
          >
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Trabajo
          </Button>
        </div>

        {/* Búsqueda */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative max-w-md">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar trabajos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Lista de trabajos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-black">Todos los Trabajos ({filteredTrabajos.length})</CardTitle>
            <CardDescription className="text-black">
              Lista completa de trabajos registrados en el sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredTrabajos.length > 0 ? (
              <div className="space-y-4">
                {filteredTrabajos.map((trabajo) => (
                  <div key={trabajo.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium text-black">{trabajo.auto}</p>
                            <p className="text-sm text-black">Cliente: {trabajo.cliente}</p>
                            <p className="text-sm text-gray-600">
                              Notas: {trabajo.notas || 'Sin notas'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge className={getEstadoBadgeColor(trabajo.estado)}>
                            {trabajo.estado}
                          </Badge>
                          <p className="text-sm text-black mt-1">Ingreso: {trabajo.fecha}</p>
                          {trabajo.fecha_egreso && (
                            <p className="text-sm text-gray-600">Egreso: {trabajo.fecha_egreso}</p>
                          )}
                          <p className="text-sm text-black">
                            Costo: ${Number(trabajo.costo_mano_obra).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {/* TODO: Implementar edición */}}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Editar
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleDeleteTrabajo(trabajo.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-black">
                {searchQuery ? 'No se encontraron trabajos con ese criterio' : 'No hay trabajos registrados'}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}