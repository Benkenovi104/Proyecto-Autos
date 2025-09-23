import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { loginSchema } from "@/lib/validations/auth"
import { signToken } from "@/lib/auth"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    console.log('Login API called')
    const body = await req.json()
    console.log('Request body received, email:', body.mail)
    
    // Validar datos de entrada
    const validatedData = loginSchema.parse(body)
    console.log('Data validated successfully')
    
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
      console.log('User not found for email:', validatedData.mail)
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      )
    }
    
    console.log('User found:', user.id, user.mail)
    
    // Verificar contraseña
    const passwordMatch = await bcrypt.compare(validatedData.password, user.password)
    
    if (!passwordMatch) {
      console.log('Password mismatch for user:', user.id)
      return NextResponse.json(
        { error: "Credenciales inválidas" },
        { status: 401 }
      )
    }
    
    console.log('Password verified successfully')
    
    // Generar token JWT
    const token = signToken({
      userId: user.id,
      email: user.mail
    })
    
    console.log('Token generated successfully')
    
    // Respuesta sin la contraseña
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    
    // Crear la respuesta con la cookie establecida del lado del servidor
    const response = NextResponse.json({
      message: "Login exitoso",
      user: userWithoutPassword,
      token
    })
    
    // Establecer la cookie del lado del servidor (más confiable)
    response.cookies.set('auth-token', token, {
      httpOnly: false, // Permitir acceso desde JavaScript para debugging
      secure: process.env.NODE_ENV === 'production', // Solo HTTPS en producción
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 días en segundos
      path: '/'
    })
    
    console.log('Cookie set server-side, sending successful response')
    return response
    
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