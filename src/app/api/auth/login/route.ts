import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { loginSchema } from "@/lib/validations/auth"
import { signToken } from "@/lib/auth"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validar datos de entrada
    const validatedData = loginSchema.parse(body)
    
    // Buscar usuario por email
    const user = await prisma.usuarios.findUnique({
      where: { mail: validatedData.mail },
      include: {
        Rol: {
          select: {
            id: true,
            nombre: true
          }
        }
      }
    })
    
    if (!user) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      )
    }
    
    // Verificar contraseña
    const passwordMatch = await bcrypt.compare(validatedData.password, user.password)
    
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      )
    }
    
    // Generar token JWT
    const token = signToken({
      userId: user.id,
      email: user.mail
    })
    
    // Respuesta sin la contraseña
    const { password, ...userWithoutPassword } = user
    
    return NextResponse.json({
      message: "Login exitoso",
      user: userWithoutPassword,
      token
    })
    
  } catch (error) {
    console.error('Error en login:', error)
    
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