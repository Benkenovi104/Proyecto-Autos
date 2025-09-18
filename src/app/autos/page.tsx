"use client"

import { useState, useEffect } from "react"
import { Header } from "@/app/componentes/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Button } from "@/app/componentes/ui/button"
import { Badge } from "@/app/componentes/ui/badge"
import { Input } from "@/app/componentes/ui/input"
import { Plus, Search, Edit, Trash2, Car } from "lucide-react"

interface Auto {
  id: number
  marca: string
  modelo: string
  anio: number
  patente: string
  color: string
  kilometraje: number
  usuario?: {
    id: number
    nombre: string
    apellido: string
    email: string
  } | null
}

export default function AutosPage() {
  const [autos, setAutos] = useState<Auto[]>([])
  const [filteredAutos, setFilteredAutos] = useState<Auto[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAutos()
  }, [])

  useEffect(() => {
    // Filtrar autos cuando cambie el término de búsqueda
    const filtered = autos.filter(auto => 
      auto.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auto.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      auto.patente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (auto.usuario && `${auto.usuario.nombre} ${auto.usuario.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredAutos(filtered)
  }, [searchTerm, autos])

  const loadAutos = async () => {
    try {
      const response = await fetch('/api/autos')
      if (response.ok) {
        const data = await response.json()
        setAutos(data)
        setFilteredAutos(data)
      } else {
        console.error('Error loading autos')
      }
    } catch (error) {
      console.error('Error loading autos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAuto = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este auto?')) {
      try {
        const response = await fetch(`/api/autos/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          loadAutos() // Recargar la lista
        } else {
          alert('Error al eliminar el auto')
        }
      } catch (error) {
        console.error('Error deleting auto:', error)
        alert('Error al eliminar el auto')
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Cargando autos...</div>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Autos</h1>
          <p className="text-gray-600">Administra los vehículos registrados en el sistema</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Autos</CardTitle>
              <Car className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{autos.length}</div>
              <p className="text-xs text-gray-600">Vehículos registrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resultados</CardTitle>
              <Search className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredAutos.length}</div>
              <p className="text-xs text-gray-600">En la búsqueda actual</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Propietarios Únicos</CardTitle>
              <Car className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(autos.filter(auto => auto.usuario).map(auto => auto.usuario!.id)).size}
              </div>
              <p className="text-xs text-gray-600">Diferentes propietarios</p>
            </CardContent>
          </Card>
        </div>

        {/* Barra de búsqueda y acciones */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Buscar por marca, modelo, patente o propietario..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Auto
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Lista de autos */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Autos</CardTitle>
            <CardDescription>
              {filteredAutos.length} autos encontrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredAutos.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Vehículo</th>
                      <th className="text-left py-3 px-4 font-medium">Patente</th>
                      <th className="text-left py-3 px-4 font-medium">Año</th>
                      <th className="text-left py-3 px-4 font-medium">Color</th>
                      <th className="text-left py-3 px-4 font-medium">Kilometraje</th>
                      <th className="text-left py-3 px-4 font-medium">Propietario</th>
                      <th className="text-left py-3 px-4 font-medium">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAutos.map((auto) => (
                      <tr key={auto.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{auto.marca}</p>
                            <p className="text-sm text-gray-600">{auto.modelo}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{auto.patente}</Badge>
                        </td>
                        <td className="py-3 px-4">{auto.anio}</td>
                        <td className="py-3 px-4">{auto.color}</td>
                        <td className="py-3 px-4">
                          {auto.kilometraje?.toLocaleString()} km
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            {auto.usuario ? (
                              <>
                                <p className="font-medium">
                                  {auto.usuario.nombre} {auto.usuario.apellido}
                                </p>
                                <p className="text-sm text-gray-600">{auto.usuario.email}</p>
                              </>
                            ) : (
                              <div>
                                <p className="font-medium text-gray-500">Sin propietario</p>
                                <p className="text-sm text-gray-400">No asignado</p>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDeleteAuto(auto.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <Car className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron autos
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm ? 
                    'No hay autos que coincidan con tu búsqueda.' : 
                    'No hay autos registrados en el sistema.'
                  }
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Primer Auto
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}