"use client"

import { useState, useEffect } from "react"
import { Header } from "@/app/componentes/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Button } from "@/app/componentes/ui/button"
import { Badge } from "@/app/componentes/ui/badge"
import { Input } from "@/app/componentes/ui/input"
import { Plus, Search, Edit, Trash2, Package, AlertTriangle } from "lucide-react"

interface Repuesto {
  id: number
  nombre: string
  codigo: string
  categoria: string
  precio: number
  stock: number
  stockMinimo: number
  descripcion?: string
  proveedor?: string
}

export default function RepuestosPage() {
  const [repuestos, setRepuestos] = useState<Repuesto[]>([])
  const [filteredRepuestos, setFilteredRepuestos] = useState<Repuesto[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadRepuestos()
  }, [])

  useEffect(() => {
    // Filtrar repuestos cuando cambie el término de búsqueda
    const filtered = repuestos.filter(repuesto => 
      repuesto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repuesto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repuesto.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repuesto.proveedor && repuesto.proveedor.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredRepuestos(filtered)
  }, [searchTerm, repuestos])

  const loadRepuestos = async () => {
    try {
      const response = await fetch('/api/repuestos')
      if (response.ok) {
        const data = await response.json()
        setRepuestos(data)
        setFilteredRepuestos(data)
      } else {
        console.error('Error loading repuestos')
      }
    } catch (error) {
      console.error('Error loading repuestos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteRepuesto = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este repuesto?')) {
      try {
        const response = await fetch(`/api/repuestos/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          loadRepuestos() // Recargar la lista
        } else {
          alert('Error al eliminar el repuesto')
        }
      } catch (error) {
        console.error('Error deleting repuesto:', error)
        alert('Error al eliminar el repuesto')
      }
    }
  }

  const getStockStatus = (repuesto: Repuesto) => {
    if (repuesto.stock === 0) {
      return { status: 'Sin stock', color: 'bg-red-100 text-red-800', icon: AlertTriangle }
    } else if (repuesto.stock <= repuesto.stockMinimo) {
      return { status: 'Stock bajo', color: 'bg-yellow-100 text-yellow-800', icon: AlertTriangle }
    } else {
      return { status: 'Stock OK', color: 'bg-green-100 text-green-800', icon: Package }
    }
  }

  const repuestosBajoStock = repuestos.filter(r => r.stock <= r.stockMinimo)
  const repuestosSinStock = repuestos.filter(r => r.stock === 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Cargando repuestos...</div>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Repuestos</h1>
          <p className="text-gray-600">Administra el inventario de repuestos y autopartes</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Repuestos</CardTitle>
              <Package className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{repuestos.length}</div>
              <p className="text-xs text-gray-600">Items en inventario</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stock Bajo</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{repuestosBajoStock.length}</div>
              <p className="text-xs text-gray-600">Requieren reposición</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sin Stock</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{repuestosSinStock.length}</div>
              <p className="text-xs text-gray-600">Agotados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
              <Package className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${repuestos.reduce((total, r) => total + (r.precio * r.stock), 0).toLocaleString()}
              </div>
              <p className="text-xs text-gray-600">En inventario</p>
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
                    placeholder="Buscar por nombre, código, categoría o proveedor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Repuesto
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Lista de repuestos */}
        <Card>
          <CardHeader>
            <CardTitle>Inventario de Repuestos</CardTitle>
            <CardDescription>
              {filteredRepuestos.length} repuestos encontrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredRepuestos.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Código</th>
                      <th className="text-left py-3 px-4 font-medium">Nombre</th>
                      <th className="text-left py-3 px-4 font-medium">Categoría</th>
                      <th className="text-left py-3 px-4 font-medium">Precio</th>
                      <th className="text-left py-3 px-4 font-medium">Stock</th>
                      <th className="text-left py-3 px-4 font-medium">Estado</th>
                      <th className="text-left py-3 px-4 font-medium">Proveedor</th>
                      <th className="text-left py-3 px-4 font-medium">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRepuestos.map((repuesto) => {
                      const stockStatus = getStockStatus(repuesto)
                      const IconComponent = stockStatus.icon
                      
                      return (
                        <tr key={repuesto.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <Badge variant="outline">{repuesto.codigo}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{repuesto.nombre}</p>
                              {repuesto.descripcion && (
                                <p className="text-sm text-gray-600 truncate max-w-xs">
                                  {repuesto.descripcion}
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">{repuesto.categoria}</Badge>
                          </td>
                          <td className="py-3 px-4 font-medium">
                            ${repuesto.precio.toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{repuesto.stock}</p>
                              <p className="text-xs text-gray-600">
                                Mín: {repuesto.stockMinimo}
                              </p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={stockStatus.color}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {stockStatus.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            {repuesto.proveedor || 'N/A'}
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
                                onClick={() => handleDeleteRepuesto(repuesto.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <Package className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron repuestos
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm ? 
                    'No hay repuestos que coincidan con tu búsqueda.' : 
                    'No hay repuestos registrados en el inventario.'
                  }
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Primer Repuesto
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}