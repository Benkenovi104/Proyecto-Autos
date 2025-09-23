import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Log para verificar que tenemos el secret (sin mostrarlo completo por seguridad)
console.log('JWT_SECRET configured:', !!process.env.JWT_SECRET, 'Length:', JWT_SECRET.length)

export function signToken(payload: { userId: number; email: string }) {
  console.log('Signing token for user:', payload.userId)
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  try {
    console.log('Verifying token, length:', token.length)
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string }
    console.log('Token verified successfully for user:', decoded.userId)
    return decoded
  } catch (error) {
    console.log('Token verification failed:', error instanceof Error ? error.message : 'Unknown error')
    return null
  }
}