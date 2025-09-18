"use client"

import { Button } from "@/app/componentes/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Badge } from "@/app/componentes/ui/badge"
import { Search, Plus, RefreshCw, Edit } from "lucide-react"
import { useState, useEffect } from "react"

// Tipos basados en tu esquema de Prisma
interface Usuario {
  id: number
  nombre: string | null
  apellido: string | null
  mail: string | null
  telefono: string | null
}

interface Auto {
  id: number
  marca: string | null
  modelo: string | null
  anio: number | null
  patente: string | null
}

interface Estado {
  id: number
  nombre: string | null
}

interface Trabajo {
  id: number
  fecha_ingreso: string | null
  fecha_egreso: string | null
  costo_mano_obra: number | null
  notas: string | null
  Usuarios: Usuario | null
  Autos: Auto | null
  Estados: Estado | null
}


function getStatusBadge(estado: string | null) {
  if (!estado) return <Badge variant="outline">Sin estado</Badge>
  
  switch (estado.toLowerCase()) {
    case "en espera":
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
          ⏳ En espera
        </Badge>
      )
    case "en proceso":
      return (
        <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
          🔄 En proceso
        </Badge>
      )
    case "realizado":
    case "completado":
      return (
        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
          ✅ Realizado
        </Badge>
      )
    default:
      return <Badge variant="outline">{estado}</Badge>
  }
}

export function CarOperationsTable() {
  const [trabajos, setTrabajos] = useState<Trabajo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTrabajos = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/trabajos')
      if (!response.ok) {
        throw new Error('Error al cargar los trabajos')
      }
      const data = await response.json()
      setTrabajos(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrabajos()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center p-8">
          <div className="text-lg">Cargando trabajos...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center p-8">
          <div className="text-red-600">Error: {error}</div>
        </div>
      </div>
    )
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-600">Operaciones del Auto</h1>
        <div className="flex items-center space-x-3">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => {/* TODO: Implementar modal de nuevo trabajo */}}
          >
            <Plus className="w-4 h-4 mr-2" />
            Nueva Operación
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
            onClick={() => {/* TODO: Implementar búsqueda */}}
          >
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
          <Button 
            variant="outline" 
            className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent"
            onClick={fetchTrabajos}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualizar
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lista de Operaciones de Mantenimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4 font-semibold">Número de OT</th>
                  <th className="text-left p-4 font-semibold">Cliente</th>
                  <th className="text-left p-4 font-semibold">Auto</th>
                  <th className="text-left p-4 font-semibold">Descripción del Trabajo</th>
                  <th className="text-left p-4 font-semibold">Estado</th>
                  <th className="text-left p-4 font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {trabajos.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-gray-500">
                      No hay trabajos registrados
                    </td>
                  </tr>
                ) : (
                  trabajos.map((trabajo) => (
                    <tr key={trabajo.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">OT-{trabajo.id.toString().padStart(3, '0')}</td>
                      <td className="p-4">
                        {trabajo.Usuarios 
                          ? `${trabajo.Usuarios.nombre || ''} ${trabajo.Usuarios.apellido || ''}`.trim() || 'Sin nombre'
                          : 'Sin cliente'
                        }
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {trabajo.Autos 
                          ? `${trabajo.Autos.marca || ''} ${trabajo.Autos.modelo || ''} ${trabajo.Autos.anio || ''} - ${trabajo.Autos.patente || ''}`.trim()
                          : 'Sin auto asignado'
                        }
                      </td>
                      <td className="p-4">{trabajo.notas || 'Sin descripción'}</td>
                      <td className="p-4">{getStatusBadge(trabajo.Estados?.nombre || null)}</td>
                      <td className="p-4">
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => {/* TODO: Implementar editar trabajo */}}
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Ver/Editar
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
