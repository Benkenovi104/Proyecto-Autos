import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const usuarios = await prisma.autos.findMany() // Cambiá 'usuarios' por cualquier tabla que tengas
    return NextResponse.json({ ok: true, count: usuarios.length, data: usuarios })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 })
  }
}
