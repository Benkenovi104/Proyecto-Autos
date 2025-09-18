import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from '@/lib/auth'

// Rutas que requieren autenticación
const protectedRoutes = ['/dashboard', '/api/trabajos', '/api/autos', '/api/usuarios', '/api/repuestos', '/api/estados']
// Rutas de autenticación (no accesibles si ya está logueado)
const authRoutes = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth-token')?.value

  // Si está intentando acceder a una ruta protegida
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      // Redirigir a login si no hay token
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Verificar que el token sea válido
    const user = verifyToken(token)
    if (!user) {
      // Token inválido, redirigir a login
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('auth-token')
      return response
    }

    // Token válido, continuar
    return NextResponse.next()
  }

  // Si está intentando acceder a login/register y ya está autenticado
  if (authRoutes.includes(pathname)) {
    if (token) {
      const user = verifyToken(token)
      if (user) {
        // Ya está logueado, redirigir al dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }
  }

  // Para todas las demás rutas, continuar normalmente
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}