import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function wakeDatabase() {
  console.log('🔄 Intentando despertar la base de datos...')
  
  const maxRetries = 10
  let retries = 0
  
  while (retries < maxRetries) {
    try {
      console.log(`⏱️  Intento ${retries + 1}/${maxRetries}...`)
      
      // Intentar una consulta simple
      const result = await prisma.$queryRaw`SELECT 1 as test`
      console.log('✅ Base de datos despierta y conectada!')
      return true
      
    } catch (error: any) {
      console.log(`❌ Error en intento ${retries + 1}: ${error.message}`)
      retries++
      
      if (retries < maxRetries) {
        console.log('⏰ Esperando 10 segundos antes del siguiente intento...')
        await new Promise(resolve => setTimeout(resolve, 10000))
      }
    }
  }
  
  console.log('💤 No se pudo despertar la base de datos. Puede estar permanentemente pausada.')
  return false
}

wakeDatabase()
  .then((success) => {
    if (success) {
      console.log('\n🎉 Base de datos lista para usar!')
    } else {
      console.log('\n❌ Necesitas reactivar la base de datos manualmente desde Supabase.')
      console.log('👉 Ve a: https://supabase.com/dashboard')
    }
  })
  .catch(console.error)
  .finally(() => prisma.$disconnect())