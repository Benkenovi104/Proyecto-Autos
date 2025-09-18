import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedRoles() {
  try {
    console.log('🌱 Creando roles básicos...')
    
    // Crear roles básicos
    const roles = await Promise.all([
      prisma.rol.upsert({
        where: { id: 1 },
        update: {},
        create: { id: 1, nombre: 'Admin' }
      }),
      prisma.rol.upsert({
        where: { id: 2 },
        update: {},
        create: { id: 2, nombre: 'Usuario' }
      }),
      prisma.rol.upsert({
        where: { id: 3 },
        update: {},
        create: { id: 3, nombre: 'Tecnico' }
      })
    ])

    console.log('✅ Roles creados:', roles)
    
    // Verificar roles existentes
    const allRoles = await prisma.rol.findMany()
    console.log('📋 Todos los roles:', allRoles)
    
  } catch (error) {
    console.error('❌ Error creando roles:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seedRoles()