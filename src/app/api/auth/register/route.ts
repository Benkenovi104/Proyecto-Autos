import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { registerSchema } from "@/lib/validations/auth"
import { signToken } from "@/lib/auth"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validar datos de entrada
    const validatedData = registerSchema.parse(body)
    
    // Verificar si el usuario ya existe
    const existingUser = await prisma.usuarios.findUnique({
      where: { mail: validatedData.mail }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: "Ya existe un usuario con este email" },
        { status: 400 }
      )
    }
    
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)
    
    // Crear usuario
    const user = await prisma.usuarios.create({
      data: {
        nombre: validatedData.nombre,
        apellido: validatedData.apellido,
        mail: validatedData.mail,
        telefono: validatedData.telefono || null,
        password: hashedPassword,
        rol_id: 2 // Rol "Usuario" por defecto
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        mail: true,
        telefono: true,
        created_at: true,
        Rol: {
          select: {
            id: true,
            nombre: true
          }
        }
      }
    })
    
    // Generar token JWT
    const token = signToken({
      userId: user.id,
      email: user.mail
    })
    
    return NextResponse.json({
      message: "Usuario registrado exitosamente",
      user,
      token
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error en registro:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: "Datos de entrada inválidos", details: error },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}