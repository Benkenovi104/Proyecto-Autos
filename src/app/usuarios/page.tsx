"use client"

import { useState, useEffect } from "react"
import { Header } from "@/app/componentes/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Button } from "@/app/componentes/ui/button"
import { Badge } from "@/app/componentes/ui/badge"
import { Input } from "@/app/componentes/ui/input"
import { Plus, Search, Edit, Trash2, Users, UserCheck, Crown } from "lucide-react"

interface Usuario {
  id: number
  nombre: string
  apellido: string
  email: string
  telefono?: string
  direccion?: string
  fechaCreacion: string
  rol?: {
    id: number
    nombre: string
  } | null
  autos?: Array<{
    id: number
    marca: string
    modelo: string
    patente: string
  }>
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [filteredUsuarios, setFilteredUsuarios] = useState<Usuario[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadUsuarios()
  }, [])

  useEffect(() => {
    // Filtrar usuarios cuando cambie el término de búsqueda
    const filtered = usuarios.filter(usuario => 
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (usuario.rol && usuario.rol.nombre.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (usuario.telefono && usuario.telefono.includes(searchTerm))
    )
    setFilteredUsuarios(filtered)
  }, [searchTerm, usuarios])

  const loadUsuarios = async () => {
    try {
      const response = await fetch('/api/usuarios')
      if (response.ok) {
        const data = await response.json()
        setUsuarios(data)
        setFilteredUsuarios(data)
      } else {
        console.error('Error loading usuarios')
      }
    } catch (error) {
      console.error('Error loading usuarios:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteUsuario = async (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      try {
        const response = await fetch(`/api/usuarios/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          loadUsuarios() // Recargar la lista
        } else {
          alert('Error al eliminar el usuario')
        }
      } catch (error) {
        console.error('Error deleting usuario:', error)
        alert('Error al eliminar el usuario')
      }
    }
  }

  const getRoleBadgeColor = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'admin':
        return 'bg-red-100 text-red-800'
      case 'mecanico':
        return 'bg-blue-100 text-blue-800'
      case 'cliente':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleIcon = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'admin':
        return Crown
      case 'mecanico':
        return UserCheck
      case 'cliente':
        return Users
      default:
        return Users
    }
  }

  const adminUsers = usuarios.filter(u => u.rol && u.rol.nombre.toLowerCase() === 'admin')
  const mechanicUsers = usuarios.filter(u => u.rol && u.rol.nombre.toLowerCase() === 'mecanico')
  const clientUsers = usuarios.filter(u => u.rol && u.rol.nombre.toLowerCase() === 'cliente')

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Cargando usuarios...</div>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administra los usuarios y roles del sistema</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{usuarios.length}</div>
              <p className="text-xs text-gray-600">Usuarios registrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Administradores</CardTitle>
              <Crown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminUsers.length}</div>
              <p className="text-xs text-gray-600">Con permisos completos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mecánicos</CardTitle>
              <UserCheck className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mechanicUsers.length}</div>
              <p className="text-xs text-gray-600">Personal técnico</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clientUsers.length}</div>
              <p className="text-xs text-gray-600">Propietarios de vehículos</p>
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
                    placeholder="Buscar por nombre, email, teléfono o rol..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Usuario
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Lista de usuarios */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuarios</CardTitle>
            <CardDescription>
              {filteredUsuarios.length} usuarios encontrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredUsuarios.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Usuario</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Teléfono</th>
                      <th className="text-left py-3 px-4 font-medium">Rol</th>
                      <th className="text-left py-3 px-4 font-medium">Autos</th>
                      <th className="text-left py-3 px-4 font-medium">Fecha Registro</th>
                      <th className="text-left py-3 px-4 font-medium">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsuarios.map((usuario) => {
                      const roleName = usuario.rol?.nombre || 'Sin rol'
                      const IconComponent = getRoleIcon(roleName)
                      
                      return (
                        <tr key={usuario.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-blue-600">
                                  {usuario.nombre.charAt(0)}{usuario.apellido.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">
                                  {usuario.nombre} {usuario.apellido}
                                </p>
                                {usuario.direccion && (
                                  <p className="text-sm text-gray-600 truncate max-w-xs">
                                    {usuario.direccion}
                                  </p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <a 
                              href={`mailto:${usuario.email}`}
                              className="text-blue-600 hover:text-blue-700"
                            >
                              {usuario.email}
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            {usuario.telefono ? (
                              <a 
                                href={`tel:${usuario.telefono}`}
                                className="text-blue-600 hover:text-blue-700"
                              >
                                {usuario.telefono}
                              </a>
                            ) : (
                              <span className="text-gray-400">No registrado</span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getRoleBadgeColor(roleName)}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {roleName}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-col space-y-1">
                              {usuario.autos && usuario.autos.length > 0 ? (
                                usuario.autos.slice(0, 2).map((auto, index) => (
                                  <Badge key={auto.id} variant="outline" className="text-xs">
                                    {auto.marca} {auto.modelo} ({auto.patente})
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-gray-400 text-sm">Sin autos</span>
                              )}
                              {usuario.autos && usuario.autos.length > 2 && (
                                <span className="text-xs text-gray-500">
                                  +{usuario.autos.length - 2} más
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            {new Date(usuario.fechaCreacion).toLocaleDateString()}
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
                                onClick={() => handleDeleteUsuario(usuario.id)}
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
                <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No se encontraron usuarios
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm ? 
                    'No hay usuarios que coincidan con tu búsqueda.' : 
                    'No hay usuarios registrados en el sistema.'
                  }
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Primer Usuario
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}