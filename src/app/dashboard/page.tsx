"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/app/componentes/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Button } from "@/app/componentes/ui/button"
import { Badge } from "@/app/componentes/ui/badge"
import { Input } from "@/app/componentes/ui/input"
import { Label } from "@/app/componentes/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/componentes/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/componentes/ui/dialog"
import { Car, Users, Wrench, AlertTriangle, Plus, Edit, Trash2, ChevronDown, ChevronUp, X } from "lucide-react"

interface DashboardStats {
  totalAutos: number
  totalUsuarios: number
  trabajosActivos: number
  repuestosBajos: number
}

interface RecentWork {
  id: number
  auto_id: number
  estado_id: number
  auto: string
  cliente: string
  estado: string
  fecha: string
  notas?: string
  costo_mano_obra?: number
  fecha_egreso?: string
}

interface Trabajo {
  id: number
  auto_id: number
  estado_id: number
  fecha_ingreso?: string
  Estados?: { nombre: string }
  Autos?: { modelo: string; marca: string; anio: number; Usuarios?: { nombre: string; apellido: string } }
  notas?: string
  costo_mano_obra?: number
  fecha_egreso?: string
}

interface Repuesto {
  id: number
  stock: number
}

interface Auto {
  id: number
  modelo: string
  marca: string
  anio: number
}

interface Usuario {
  id: number
  nombre: string
  apellido: string
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalAutos: 0,
    totalUsuarios: 0,
    trabajosActivos: 0,
    repuestosBajos: 0
  })
  // const [recentWork, setRecentWork] = useState<RecentWork[]>([])  // No se usa en la renderización actual
  const [allWork, setAllWork] = useState<RecentWork[]>([]) // Todos los trabajos
  const [filteredWork, setFilteredWork] = useState<RecentWork[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedWork, setExpandedWork] = useState<number | null>(null)
  // const [searchQuery, setSearchQuery] = useState("")  // No se usa en la UI actual
  const [filterType, setFilterType] = useState<string>("")
  const [filterValue, setFilterValue] = useState<string>("todos")
  const [availableFilterOptions, setAvailableFilterOptions] = useState<string[]>([])
  const [showNewWorkModal, setShowNewWorkModal] = useState(false)
  const [showAllWorks, setShowAllWorks] = useState(false)
  const [autos, setAutos] = useState<{id: number, marca: string, modelo: string, anio: number, patente: string}[]>([])
  const [estados, setEstados] = useState<{id: number, nombre: string}[]>([])
  const [newWork, setNewWork] = useState({
    auto_id: "",
    estado_id: "",
    notas: "",
    costo_mano_obra: ""
  })
  const [showEditWorkModal, setShowEditWorkModal] = useState(false)
  const [editingWork, setEditingWork] = useState<RecentWork | null>(null)
  const [editWork, setEditWork] = useState({
    auto_id: "",
    estado_id: "",
    notas: "",
    costo_mano_obra: ""
  })
  const router = useRouter()

  useEffect(() => {
    loadDashboardData()
    loadModalData()
  }, [])

  const loadModalData = async () => {
    try {
      // Cargar autos
      const autosResponse = await fetch('/api/autos')
      if (autosResponse.ok) {
        const autosData = await autosResponse.json()
        setAutos(autosData)
      }

      // Cargar estados
      const estadosResponse = await fetch('/api/estados')
      if (estadosResponse.ok) {
        const estadosData = await estadosResponse.json()
        setEstados(estadosData)
      }
    } catch (error) {
      console.error('Error loading modal data:', error)
    }
  }

  // Efecto para filtrar trabajos
  useEffect(() => {
    let filtered = allWork
    
    // Aplicar filtro según tipo y valor seleccionado
    if (filterType !== 'todos' && filterValue !== 'todos') {
      filtered = filtered.filter(trabajo => {
        switch (filterType) {
          case 'marca':
            return trabajo.auto.split(' ')[0].toLowerCase() === filterValue.toLowerCase()
          case 'modelo':
            const partes = trabajo.auto.split(' ')
            const modelo = partes.length > 1 ? partes[1] : ''
            return modelo.toLowerCase() === filterValue.toLowerCase()
          case 'cliente':
            return trabajo.cliente === filterValue
          case 'estado':
            return trabajo.estado === filterValue
          default:
            return true
        }
      })
    }
    
    // Limitar cantidad si no se muestra todo
    const displayWork = showAllWorks ? filtered : filtered.slice(0, 3)
    setFilteredWork(displayWork)
  }, [filterType, filterValue, allWork, showAllWorks])

  // Función para actualizar las opciones disponibles según el tipo de filtro
  useEffect(() => {
    if (allWork.length > 0 && filterType !== 'todos') {
      let options: string[] = []
      
      switch (filterType) {
        case 'marca':
          options = [...new Set(allWork.map(trabajo => trabajo.auto.split(' ')[0]))].sort()
          break
        case 'modelo':
          options = [...new Set(allWork.map(trabajo => {
            const partes = trabajo.auto.split(' ')
            return partes.length > 1 ? partes[1] : ''
          }).filter(modelo => modelo !== ''))].sort()
          break
        case 'cliente':
          options = [...new Set(allWork.map(trabajo => trabajo.cliente))].sort()
          break
        case 'estado':
          options = [...new Set(allWork.map(trabajo => trabajo.estado))].sort()
          break
      }
      
      setAvailableFilterOptions(options)
      setFilterValue('todos') // Reset value when type changes
    } else {
      setAvailableFilterOptions([])
      setFilterValue('todos')
    }
  }, [filterType, allWork])

  const toggleExpand = (workId: number) => {
    setExpandedWork(expandedWork === workId ? null : workId)
  }

  const handleDeleteWork = async (workId: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este trabajo?')) {
      try {
        const response = await fetch(`/api/trabajos/${workId}`, { 
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          // Recargar datos después de eliminar
          await loadDashboardData();
          alert('Trabajo eliminado exitosamente');
        } else {
          const errorData = await response.json().catch(() => ({ error: 'Error desconocido' }));
          console.error('Error del servidor:', errorData);
          alert(`Error al eliminar: ${errorData.error || 'Error del servidor'}`);
        }
      } catch (error: unknown) {
        console.error('Error de conexión:', error);
        alert('Error de conexión al eliminar el trabajo. Verifica que la base de datos esté activa.');
      }
    }
  }

  const handleCreateWork = async () => {
    try {
      const response = await fetch('/api/trabajos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          auto_id: parseInt(newWork.auto_id),
          estado_id: parseInt(newWork.estado_id),
          notas: newWork.notas,
          costo_mano_obra: parseFloat(newWork.costo_mano_obra) || 0,
          fecha_ingreso: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setShowNewWorkModal(false)
        setNewWork({
          auto_id: "",
          estado_id: "",
          notas: "",
          costo_mano_obra: ""
        })
        loadDashboardData() // Recargar datos
      } else {
        const error = await response.text()
        console.error('Error:', error)
        alert('Error al crear el trabajo')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al crear el trabajo')
    }
  }

  const handleEditWork = (work: RecentWork) => {
    setEditingWork(work)
    setEditWork({
      auto_id: "", // No se usa ya que el vehículo no se puede cambiar
      estado_id: work.estado, // Usar el nombre del estado directamente
      notas: work.notas || "",
      costo_mano_obra: work.costo_mano_obra?.toString() || ""
    })
    setShowEditWorkModal(true)
  }

  const handleUpdateWork = async () => {
    if (!editingWork) return
    
    try {
      // Encontrar el ID del estado por su nombre
      const estadoSeleccionado = estados.find(estado => estado.nombre === editWork.estado_id)
      if (!estadoSeleccionado) {
        alert('Error: Estado no válido')
        return
      }

      const response = await fetch(`/api/trabajos/${editingWork.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          auto_id: editingWork.auto_id, // Usar el auto_id original, no se puede cambiar
          estado_id: estadoSeleccionado.id, // Convertir nombre a ID
          notas: editWork.notas,
          costo_mano_obra: parseFloat(editWork.costo_mano_obra) || 0,
        }),
      });

      if (response.ok) {
        setShowEditWorkModal(false)
        setEditingWork(null)
        setEditWork({
          auto_id: "",
          estado_id: "",
          notas: "",
          costo_mano_obra: ""
        })
        loadDashboardData() // Recargar datos
        alert('Trabajo actualizado exitosamente')
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Error desconocido' }));
        console.error('Error:', errorData)
        alert(`Error al actualizar el trabajo: ${errorData.error}`)
      }
    } catch (error: unknown) {
      console.error('Error:', error)
      alert('Error de conexión al actualizar el trabajo')
    }
  }

  const loadDashboardData = async () => {
    try {
      // Cargar estadísticas con manejo de errores individual
      const autosRes = await fetch('/api/autos');
      const usuariosRes = await fetch('/api/usuarios');
      const trabajosRes = await fetch('/api/trabajos');
      const repuestosRes = await fetch('/api/repuestos');

      // Verificar si las respuestas son exitosas
      let autos: Auto[] = [];
      let usuarios: Usuario[] = [];
      let trabajos: Trabajo[] = [];
      let repuestos: Repuesto[] = [];

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
      const repuestosBajos = repuestos.filter((r: Repuesto) => r.stock <= 10).length

      setStats({
        totalAutos: autos.length || 0,
        totalUsuarios: usuarios.length || 0,
        trabajosActivos: trabajos.filter((t: Trabajo) => t.Estados?.nombre === 'En proceso').length || 0,
        repuestosBajos: repuestosBajos
      })

      // Cargar trabajos recientes (últimos 3) con datos completos
      const trabajosOrdenados = trabajos
        .sort((a: Trabajo, b: Trabajo) => {
          const fechaA = a.fecha_ingreso ? new Date(a.fecha_ingreso).getTime() : 0;
          const fechaB = b.fecha_ingreso ? new Date(b.fecha_ingreso).getTime() : 0;
          return fechaB - fechaA;
        });

      // Mapear TODOS los trabajos
      const todosTrabajosFormateados = trabajosOrdenados.map((trabajo: Trabajo) => ({
        id: trabajo.id,
        auto_id: trabajo.auto_id,
        estado_id: trabajo.estado_id,
        auto: trabajo.Autos ? `${trabajo.Autos.marca} ${trabajo.Autos.modelo}` : 'Vehículo no asignado',
        cliente: trabajo.Autos?.Usuarios ? `${trabajo.Autos.Usuarios.nombre} ${trabajo.Autos.Usuarios.apellido}` : 'Cliente no asignado',
        estado: trabajo.Estados?.nombre || 'Sin estado',
        notas: trabajo.notas || '',
        costo_mano_obra: trabajo.costo_mano_obra || 0,
        fecha_egreso: trabajo.fecha_egreso ? 
          (() => {
            try {
              const fechaStr = trabajo.fecha_egreso.toString();
              if (fechaStr.includes('T')) {
                const soloFecha = fechaStr.split('T')[0];
                const [year, month, day] = soloFecha.split('-');
                return `${day}/${month}/${year}`;
              } else if (fechaStr.includes('-')) {
                const [year, month, day] = fechaStr.split('-');
                return `${day}/${month}/${year}`;
              } else {
                return '';
              }
            } catch {
              return '';
            }
          })() : '',
        fecha: trabajo.fecha_ingreso ? 
          (() => {
            try {
              const fechaStr = trabajo.fecha_ingreso.toString();
              if (fechaStr.includes('T')) {
                const soloFecha = fechaStr.split('T')[0];
                const [year, month, day] = soloFecha.split('-');
                return `${day}/${month}/${year}`;
              } else if (fechaStr.includes('-')) {
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
      }));

      // Guardar todos los trabajos y solo los 3 recientes
      setAllWork(todosTrabajosFormateados);
      // setRecentWork(todosTrabajosFormateados.slice(0, 3));  // Comentado porque recentWork no se usa
      setFilteredWork(todosTrabajosFormateados.slice(0, 3));
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
              <div className="flex items-center gap-3">
                <Select
                  value={filterType}
                  onValueChange={(value) => setFilterType(value)}
                >
                  <SelectTrigger className="w-72 h-12 text-base px-10">
                    <SelectValue placeholder="Filtrar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="marca">Por Marca</SelectItem>
                    <SelectItem value="modelo">Por Modelo</SelectItem>
                    <SelectItem value="cliente">Por Cliente</SelectItem>
                    <SelectItem value="estado">Por Estado</SelectItem>
                  </SelectContent>
                </Select>
                
                {filterType && filterType !== 'todos' && availableFilterOptions.length > 0 && (
                  <Select
                    value={filterValue}
                    onValueChange={setFilterValue}
                  >
                    <SelectTrigger className="w-96 h-12 text-base px-10">
                      <SelectValue placeholder={`Seleccionar ${filterType}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      {availableFilterOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {filterType && filterType !== 'todos' && (
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setFilterType('')
                      setFilterValue('todos')
                    }}
                    className="h-10"
                  >
                    Limpiar
                  </Button>
                )}

                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setShowNewWorkModal(true)}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Nuevo Trabajo
                </Button>
              </div>
            </CardTitle>
            <CardDescription className="text-black">
              Últimos trabajos registrados en el sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredWork.length > 0 ? (
              <div className="space-y-4">
                <div className={`space-y-4 ${showAllWorks ? 'max-h-96 overflow-y-auto' : ''}`}>
                  {filteredWork.map((trabajo) => (
                    <div key={trabajo.id} className="border rounded-lg overflow-hidden">
                      {/* Header del trabajo - siempre visible */}
                      <div 
                        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleExpand(trabajo.id)}
                      >
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
                          {expandedWork === trabajo.id ? (
                            <ChevronUp className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {/* Detalles expandidos */}
                      {expandedWork === trabajo.id && (
                        <div className="px-4 pb-4 border-t bg-gray-50">
                          <div className="py-3 space-y-2">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-sm font-medium text-black">Notas:</span>
                                <p className="text-sm text-black">{trabajo.notas || 'Sin notas'}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-black">Costo Mano de Obra:</span>
                                <p className="text-sm text-black">
                                  ${trabajo.costo_mano_obra ? Number(trabajo.costo_mano_obra).toLocaleString() : '0'}
                                </p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-black">Fecha de Ingreso:</span>
                                <p className="text-sm text-black">{trabajo.fecha}</p>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-black">Fecha de Egreso:</span>
                                <p className="text-sm text-black">{trabajo.fecha_egreso || 'Pendiente'}</p>
                              </div>
                            </div>
                            
                            {/* Botones de acción */}
                            <div className="flex justify-end space-x-2 mt-4 pt-3 border-t">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleEditWork(trabajo)
                                }}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Editar
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleDeleteWork(trabajo.id)
                                }}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Eliminar
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Botón mostrar todos/menos */}
                {allWork.length > 3 && (
                  <div className="text-center pt-4 border-t">
                    <Button
                      variant="outline"
                      onClick={() => setShowAllWorks(!showAllWorks)}
                      className="w-full"
                    >
                      {showAllWorks ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-2" />
                          Mostrar menos trabajos
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-2" />
                          Mostrar todos los trabajos ({allWork.length})
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-black">
                {(filterType !== 'todos' && filterValue !== 'todos') ? 'No se encontraron trabajos con ese criterio' : 'No hay trabajos recientes'}
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

      {/* Modal para nuevo trabajo */}
      <Dialog open={showNewWorkModal} onOpenChange={setShowNewWorkModal}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Nuevo Trabajo</DialogTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowNewWorkModal(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription>
              Crea un nuevo trabajo en el sistema
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="auto">Vehículo</Label>
              <Select
                value={newWork.auto_id}
                onValueChange={(value) => setNewWork({...newWork, auto_id: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un vehículo" />
                </SelectTrigger>
                <SelectContent>
                  {autos.map((auto) => (
                    <SelectItem key={auto.id} value={auto.id.toString()}>
                      {auto.marca} {auto.modelo} ({auto.patente})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="estado">Estado</Label>
              <Select
                value={newWork.estado_id}
                onValueChange={(value) => setNewWork({...newWork, estado_id: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un estado" />
                </SelectTrigger>
                <SelectContent>
                  {estados.map((estado) => (
                    <SelectItem key={estado.id} value={estado.id.toString()}>
                      {estado.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notas">Notas</Label>
              <Input
                id="notas"
                placeholder="Descripción del trabajo..."
                value={newWork.notas}
                onChange={(e) => setNewWork({...newWork, notas: e.target.value})}
                className="bg-white text-black border-gray-300"
              />
            </div>

            <div>
              <Label htmlFor="costo">Costo Mano de Obra</Label>
              <Input
                id="costo"
                type="number"
                placeholder="0.00"
                value={newWork.costo_mano_obra}
                onChange={(e) => setNewWork({...newWork, costo_mano_obra: e.target.value})}
                className="bg-white text-black border-gray-300"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowNewWorkModal(false)}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleCreateWork}
                disabled={!newWork.auto_id || !newWork.estado_id}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Crear Trabajo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Editar Trabajo */}
      <Dialog open={showEditWorkModal} onOpenChange={setShowEditWorkModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Editar Trabajo</DialogTitle>
            <DialogDescription>
              Modifica los detalles del trabajo seleccionado.
            </DialogDescription>
            <Button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
              onClick={() => setShowEditWorkModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-auto">Vehículo</Label>
              <Input
                id="edit-auto"
                value={editingWork ? editingWork.auto : ''}
                disabled
                className="bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <Label htmlFor="edit-estado">Estado</Label>
              <Select
                value={editWork.estado_id}
                onValueChange={(value) => setEditWork({...editWork, estado_id: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar estado" />
                </SelectTrigger>
                <SelectContent>
                  {estados.map((estado) => (
                    <SelectItem key={estado.id} value={estado.nombre}>
                      {estado.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="edit-notas">Notas</Label>
              <Input
                id="edit-notas"
                placeholder="Notas del trabajo"
                value={editWork.notas}
                onChange={(e) => setEditWork({...editWork, notas: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="edit-costo">Costo Mano de Obra</Label>
              <Input
                id="edit-costo"
                type="number"
                placeholder="0.00"
                value={editWork.costo_mano_obra}
                onChange={(e) => setEditWork({...editWork, costo_mano_obra: e.target.value})}
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowEditWorkModal(false)}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleUpdateWork}
                disabled={!editWork.estado_id}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Actualizar Trabajo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}