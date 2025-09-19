import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function formatDatabase() {
  try {
    console.log('🔄 Iniciando formateo de base de datos...')

    // 1. Limpiar todas las tablas en orden correcto (respetando FK)
    console.log('🗑️  Limpiando tablas existentes...')
    
    await prisma.trabajos.deleteMany()
    await prisma.autos.deleteMany()
    await prisma.usuarios.deleteMany()
    await prisma.repuestos.deleteMany()
    await prisma.estados.deleteMany()
    await prisma.rol.deleteMany()

    console.log('✅ Tablas limpiadas correctamente')

    // 2. Crear roles básicos
    console.log('👑 Creando roles del sistema...')
    
    const roles = await prisma.rol.createMany({
      data: [
        { id: 1, nombre: 'Admin' },
        { id: 2, nombre: 'Cliente' },
        { id: 3, nombre: 'Mecanico' }
      ]
    })

    console.log(`✅ ${roles.count} roles creados`)

    // 3. Crear estados de trabajo
    console.log('📋 Creando estados de trabajo...')
    
    const estados = await prisma.estados.createMany({
      data: [
        { id: 1, nombre: 'Pendiente' },
        { id: 2, nombre: 'En proceso' },
        { id: 3, nombre: 'Completado' },
        { id: 4, nombre: 'Cancelado' },
        { id: 5, nombre: 'En espera de repuestos' }
      ]
    })

    console.log(`✅ ${estados.count} estados creados`)

    // 4. Crear usuarios de ejemplo
    console.log('👥 Creando usuarios de ejemplo...')
    
    const adminPassword = await bcrypt.hash('admin123', 12)
    const clientePassword = await bcrypt.hash('cliente123', 12)
    const mecanicoPassword = await bcrypt.hash('mecanico123', 12)

    const usuarios = await prisma.usuarios.createMany({
      data: [
        {
          id: 1,
          nombre: 'Santiago',
          apellido: 'Administrador',
          mail: 'admin@autogest.com',
          telefono: '+54-11-1234-5678',
          password: adminPassword,
          rol_id: 1
        },
        {
          id: 2,
          nombre: 'Carlos',
          apellido: 'Mechanic',
          mail: 'mecanico@autogest.com',
          telefono: '+54-11-2345-6789',
          password: mecanicoPassword,
          rol_id: 3
        },
        {
          id: 3,
          nombre: 'María',
          apellido: 'González',
          mail: 'maria.gonzalez@email.com',
          telefono: '+54-11-3456-7890',
          password: clientePassword,
          rol_id: 2
        },
        {
          id: 4,
          nombre: 'Juan',
          apellido: 'Pérez',
          mail: 'juan.perez@email.com',
          telefono: '+54-11-4567-8901',
          password: clientePassword,
          rol_id: 2
        },
        {
          id: 5,
          nombre: 'Ana',
          apellido: 'López',
          mail: 'ana.lopez@email.com',
          telefono: '+54-11-5678-9012',
          password: clientePassword,
          rol_id: 2
        }
      ]
    })

    console.log(`✅ ${usuarios.count} usuarios creados`)

    // 5. Crear vehículos de ejemplo
    console.log('🚗 Creando vehículos de ejemplo...')
    
    const autos = await prisma.autos.createMany({
      data: [
        {
          id: 1,
          marca: 'Toyota',
          modelo: 'Corolla',
          anio: 2020,
          patente: 'ABC123',
          usuario_id: 3
        },
        {
          id: 2,
          marca: 'Ford',
          modelo: 'Focus',
          anio: 2019,
          patente: 'DEF456',
          usuario_id: 4
        },
        {
          id: 3,
          marca: 'Chevrolet',
          modelo: 'Cruze',
          anio: 2021,
          patente: 'GHI789',
          usuario_id: 5
        },
        {
          id: 4,
          marca: 'Volkswagen',
          modelo: 'Golf',
          anio: 2018,
          patente: 'JKL012',
          usuario_id: 3
        },
        {
          id: 5,
          marca: 'Honda',
          modelo: 'Civic',
          anio: 2022,
          patente: 'MNO345',
          usuario_id: 4
        },
        {
          id: 6,
          marca: 'Nissan',
          modelo: 'Sentra',
          anio: 2020,
          patente: 'PQR678',
          usuario_id: 5
        }
      ]
    })

    console.log(`✅ ${autos.count} vehículos creados`)

    // 6. Crear repuestos de ejemplo
    console.log('🔧 Creando inventario de repuestos...')
    
    const repuestos = await prisma.repuestos.createMany({
      data: [
        {
          id: 1,
          nombre: 'Filtro de Aceite',
          descripcion: 'Filtro de aceite universal para motores 1.6L',
          precio_unitario: 1500.00,
          stock: 25
        },
        {
          id: 2,
          nombre: 'Pastillas de Freno Delanteras',
          descripcion: 'Set completo de pastillas cerámicas',
          precio_unitario: 8500.00,
          stock: 12
        },
        {
          id: 3,
          nombre: 'Amortiguador Trasero',
          descripcion: 'Amortiguador a gas para eje trasero',
          precio_unitario: 15000.00,
          stock: 8
        },
        {
          id: 4,
          nombre: 'Aceite Motor 5W-30',
          descripcion: 'Aceite sintético 4 litros',
          precio_unitario: 6500.00,
          stock: 30
        },
        {
          id: 5,
          nombre: 'Bujías de Encendido',
          descripcion: 'Set de 4 bujías iridium',
          precio_unitario: 4200.00,
          stock: 20
        },
        {
          id: 6,
          nombre: 'Correa de Distribución',
          descripcion: 'Kit completo con tensores',
          precio_unitario: 12000.00,
          stock: 5
        },
        {
          id: 7,
          nombre: 'Batería 12V 60Ah',
          descripcion: 'Batería libre de mantenimiento',
          precio_unitario: 25000.00,
          stock: 3
        },
        {
          id: 8,
          nombre: 'Neumático 185/65 R15',
          descripcion: 'Neumático radial para auto',
          precio_unitario: 18000.00,
          stock: 16
        },
        {
          id: 9,
          nombre: 'Líquido de Frenos DOT 4',
          descripcion: 'Botella de 500ml',
          precio_unitario: 2800.00,
          stock: 15
        },
        {
          id: 10,
          nombre: 'Termostato',
          descripcion: 'Termostato del sistema de refrigeración',
          precio_unitario: 3500.00,
          stock: 10
        }
      ]
    })

    console.log(`✅ ${repuestos.count} repuestos creados`)

    // 7. Crear trabajos de ejemplo
    console.log('💼 Creando órdenes de trabajo...')
    
    const trabajos = await prisma.trabajos.createMany({
      data: [
        {
          id: 1,
          fecha_ingreso: new Date('2024-01-15'),
          fecha_egreso: new Date('2024-01-16'),
          costo_mano_obra: 5000.00,
          usuario_id: 2, // Mecánico
          auto_id: 1,
          estado_id: 3, // Completado
          notas: 'Cambio de aceite y filtro completo'
        },
        {
          id: 2,
          fecha_ingreso: new Date('2024-01-18'),
          fecha_egreso: null,
          costo_mano_obra: 12000.00,
          usuario_id: 2,
          auto_id: 2,
          estado_id: 2, // En proceso
          notas: 'Cambio de pastillas de freno y discos'
        },
        {
          id: 3,
          fecha_ingreso: new Date('2024-01-20'),
          fecha_egreso: null,
          costo_mano_obra: 8000.00,
          usuario_id: 2,
          auto_id: 3,
          estado_id: 1, // Pendiente
          notas: 'Revisión general y cambio de bujías'
        },
        {
          id: 4,
          fecha_ingreso: new Date('2024-01-12'),
          fecha_egreso: new Date('2024-01-14'),
          costo_mano_obra: 25000.00,
          usuario_id: 2,
          auto_id: 4,
          estado_id: 3, // Completado
          notas: 'Cambio de kit de distribución completo'
        },
        {
          id: 5,
          fecha_ingreso: new Date('2024-01-22'),
          fecha_egreso: null,
          costo_mano_obra: 15000.00,
          usuario_id: 2,
          auto_id: 5,
          estado_id: 5, // En espera de repuestos
          notas: 'Cambio de amortiguadores - esperando repuestos'
        }
      ]
    })

    console.log(`✅ ${trabajos.count} trabajos creados`)

    // 8. Reset de secuencias de auto-incremento
    console.log('🔄 Reiniciando secuencias...')
    
    await prisma.$executeRaw`SELECT setval('public."Rol_id_seq"', (SELECT MAX(id) FROM public."Rol"))`
    await prisma.$executeRaw`SELECT setval('public."Estados_id_seq"', (SELECT MAX(id) FROM public."Estados"))`
    await prisma.$executeRaw`SELECT setval('public."Usuarios_id_seq"', (SELECT MAX(id) FROM public."Usuarios"))`
    await prisma.$executeRaw`SELECT setval('public."Autos_id_seq"', (SELECT MAX(id) FROM public."Autos"))`
    await prisma.$executeRaw`SELECT setval('public."Repuestos_id_seq"', (SELECT MAX(id) FROM public."Repuestos"))`
    await prisma.$executeRaw`SELECT setval('public."Trabajos_id_seq"', (SELECT MAX(id) FROM public."Trabajos"))`

    console.log('✅ Secuencias reiniciadas')

    console.log('\n🎉 ¡Base de datos formateada exitosamente!')
    console.log('\n📊 Resumen de datos creados:')
    console.log(`   👑 Roles: ${roles.count}`)
    console.log(`   📋 Estados: ${estados.count}`)
    console.log(`   👥 Usuarios: ${usuarios.count}`)
    console.log(`   🚗 Vehículos: ${autos.count}`)
    console.log(`   🔧 Repuestos: ${repuestos.count}`)
    console.log(`   💼 Trabajos: ${trabajos.count}`)

    console.log('\n🔑 Credenciales de acceso:')
    console.log('   👑 Admin: admin@autogest.com / admin123')
    console.log('   🔧 Mecánico: mecanico@autogest.com / mecanico123')
    console.log('   👤 Cliente: maria.gonzalez@email.com / cliente123')

  } catch (error) {
    console.error('❌ Error al formatear la base de datos:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

formatDatabase()
  .catch((error) => {
    console.error('❌ Error fatal:', error)
    process.exit(1)
  })