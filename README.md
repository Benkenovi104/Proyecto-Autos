# 🚗 AutoGest - Sistema de Gestión Automotriz

**AutoGest** es una aplicación web completa para la gestión integral de talleres automotrices, desarrollada con tecnologías modernas y diseño responsive.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Prisma](https://img.shields.io/badge/Prisma-6.16.0-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-cyan)

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🏗️ Arquitectura](#️-arquitectura)
- [🛠️ Tecnologías](#️-tecnologías)
- [📥 Instalación](#-instalación)
- [⚙️ Configuración](#️-configuración)
- [🚀 Uso](#-uso)
- [📚 API Reference](#-api-reference)
- [🔐 Autenticación](#-autenticación)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contribuir](#-contribuir)

## ✨ Características

### 🔒 **Sistema de Autenticación Completo**
- **Registro y Login**: Formularios con validación robusta usando Zod
- **JWT Security**: Autenticación basada en tokens con expiración
- **Middleware Protection**: Protección automática de rutas sensibles
- **Roles de Usuario**: Admin, Mecánico y Cliente con permisos diferenciados
- **Password Security**: Hash con bcryptjs y validaciones de seguridad

### 🎛️ **Dashboard Inteligente**
- **Estadísticas en Tiempo Real**: Métricas actualizadas del negocio
- **Resumen Visual**: Cards informativos con iconografía intuitiva
- **Trabajos Recientes**: Lista de actividades más recientes
- **Accesos Rápidos**: Navegación eficiente a secciones principales

### 🚙 **Gestión de Vehículos**
- **CRUD Completo**: Crear, leer, actualizar y eliminar vehículos
- **Búsqueda Avanzada**: Filtros por marca, modelo, patente y propietario
- **Información Detallada**: Marca, modelo, año, color, kilometraje
- **Relación con Propietarios**: Vinculación automática con usuarios

### 👥 **Administración de Usuarios**
- **Gestión de Roles**: Sistema de permisos por rol (Admin/Mecánico/Cliente)
- **Información de Contacto**: Teléfono, email, dirección
- **Historial de Vehículos**: Visualización de autos por propietario
- **Búsqueda y Filtros**: Localización rápida de usuarios

### 🔧 **Inventario de Repuestos**
- **Control de Stock**: Seguimiento en tiempo real del inventario
- **Alertas Inteligentes**: Notificaciones de stock bajo y agotado
- **Categorización**: Organización por categorías y proveedores
- **Valorización**: Cálculo automático del valor total del inventario

### 💼 **Gestión de Trabajos**
- **Órdenes de Trabajo**: Creación y seguimiento de servicios
- **Estados Dinámicos**: Pendiente, En Proceso, Completado
- **Costeo**: Gestión de mano de obra y repuestos
- **Historial Completo**: Registro detallado de actividades

## 🏗️ Arquitectura

```
src/
├── app/                          # App Router de Next.js 15
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Autenticación
│   │   │   ├── login/            # Endpoint de login
│   │   │   └── register/         # Endpoint de registro
│   │   ├── autos/                # CRUD de vehículos
│   │   ├── usuarios/             # CRUD de usuarios
│   │   ├── repuestos/            # CRUD de repuestos
│   │   ├── trabajos/             # CRUD de trabajos
│   │   └── estados/              # CRUD de estados
│   ├── componentes/              # Componentes reutilizables
│   │   ├── auth/                 # Componentes de autenticación
│   │   │   ├── LoginForm.tsx     # Formulario de login
│   │   │   └── RegisterForm.tsx  # Formulario de registro
│   │   ├── ui/                   # Componentes UI base
│   │   └── header.tsx            # Header con navegación
│   ├── dashboard/                # Panel principal
│   ├── autos/                    # Gestión de vehículos
│   ├── usuarios/                 # Gestión de usuarios
│   ├── repuestos/                # Gestión de repuestos
│   ├── login/                    # Página de autenticación
│   └── register/                 # Página de registro
├── lib/                          # Librerías y utilidades
│   ├── auth.ts                   # JWT utilities
│   └── validations/              # Esquemas de validación Zod
├── middleware.ts                 # Middleware de autenticación
└── prisma/
    └── schema.prisma             # Esquema de base de datos
```

## 🛠️ Tecnologías

### **Frontend**
- **Next.js 15.5.2**: Framework React con App Router y Turbopack
- **React 19.1.0**: Biblioteca de interfaz de usuario
- **TypeScript 5.x**: Tipado estático para mayor robustez
- **Tailwind CSS 4.x**: Framework CSS utility-first
- **Radix UI**: Componentes accesibles y customizables
- **Lucide React**: Iconografía moderna y consistente

### **Backend**
- **Next.js API Routes**: Endpoints serverless integrados
- **Prisma 6.16.0**: ORM moderno para TypeScript
- **PostgreSQL**: Base de datos relacional robusta
- **JWT**: Autenticación stateless segura
- **bcryptjs**: Hash seguro de contraseñas
- **Zod**: Validación de esquemas TypeScript-first

### **DevTools & Quality**
- **ESLint**: Linting y calidad de código
- **PostCSS**: Procesamiento avanzado de CSS
- **pnpm**: Gestor de paquetes eficiente
- **Git**: Control de versiones

## 📥 Instalación

### **Requisitos Previos**
- Node.js 18+ 
- pnpm (recomendado) o npm
- PostgreSQL 12+
- Git

### **Clonar el Repositorio**
```bash
git clone https://github.com/Benkenovi104/Proyecto-Autos.git
cd proyecto-autos
```

### **Instalar Dependencias**
```bash
pnpm install
```

### **Configurar Base de Datos**
```bash
# Generar el cliente Prisma
pnpm prisma generate

# Sincronizar esquema con BD
pnpm prisma db push

# (Opcional) Abrir Prisma Studio
pnpm prisma studio
```

## ⚙️ Configuración

### **Variables de Entorno**
Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de datos PostgreSQL
DATABASE_URL="postgresql://usuario:password@localhost:5432/autogest?schema=public"

# JWT Secret (genera una clave segura)
JWT_SECRET="tu-clave-secreta-muy-segura-aqui"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
```

### **Configuración de Roles Iniciales**
El sistema incluye roles predefinidos:
- **Admin (ID: 1)**: Acceso completo al sistema
- **Cliente (ID: 2)**: Rol por defecto para nuevos usuarios
- **Mecánico (ID: 3)**: Acceso técnico y operativo

## 🚀 Uso

### **Desarrollo**
```bash
# Iniciar servidor de desarrollo
pnpm dev

# Servidor disponible en http://localhost:3000
```

### **Producción**
```bash
# Build optimizado
pnpm build

# Iniciar servidor de producción
pnpm start
```

### **Utilidades**
```bash
# Regenerar cliente Prisma
pnpm prisma generate

# Reset de base de datos (¡CUIDADO!)
pnpm prisma db push --force-reset

# Ver base de datos en Prisma Studio
pnpm prisma studio
```

## 📚 API Reference

### **Autenticación**

#### `POST /api/auth/register`
Registra un nuevo usuario en el sistema.

```json
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "mail": "juan@example.com",
  "telefono": "+1234567890",
  "password": "MiPassword123",
  "confirmPassword": "MiPassword123"
}
```

#### `POST /api/auth/login`
Autentica un usuario existente.

```json
{
  "mail": "juan@example.com",
  "password": "MiPassword123"
}
```

### **Recursos CRUD**

#### **Vehículos** `/api/autos`
- `GET /api/autos` - Listar todos los vehículos
- `POST /api/autos` - Crear nuevo vehículo
- `GET /api/autos/[id]` - Obtener vehículo específico
- `PUT /api/autos/[id]` - Actualizar vehículo
- `DELETE /api/autos/[id]` - Eliminar vehículo

#### **Usuarios** `/api/usuarios`
- `GET /api/usuarios` - Listar todos los usuarios
- `POST /api/usuarios` - Crear nuevo usuario
- `GET /api/usuarios/[id]` - Obtener usuario específico
- `PUT /api/usuarios/[id]` - Actualizar usuario
- `DELETE /api/usuarios/[id]` - Eliminar usuario

#### **Repuestos** `/api/repuestos`
- `GET /api/repuestos` - Listar inventario completo
- `POST /api/repuestos` - Agregar nuevo repuesto
- `GET /api/repuestos/[id]` - Obtener repuesto específico
- `PUT /api/repuestos/[id]` - Actualizar repuesto
- `DELETE /api/repuestos/[id]` - Eliminar repuesto

#### **Trabajos** `/api/trabajos`
- `GET /api/trabajos` - Listar todas las órdenes
- `POST /api/trabajos` - Crear nueva orden de trabajo
- `GET /api/trabajos/[id]` - Obtener trabajo específico
- `PUT /api/trabajos/[id]` - Actualizar trabajo
- `DELETE /api/trabajos/[id]` - Eliminar trabajo

## 🔐 Autenticación

### **Flujo de Autenticación**
1. **Registro/Login**: El usuario completa el formulario
2. **Validación**: Zod valida los datos del lado cliente y servidor
3. **Verificación**: bcryptjs verifica las credenciales
4. **Token JWT**: Se genera token con expiración de 7 días
5. **Cookie Segura**: Token almacenado en cookie httpOnly
6. **Middleware**: Protección automática de rutas sensibles

### **Protección de Rutas**
```typescript
// Rutas protegidas (requieren autenticación)
const protectedRoutes = [
  '/dashboard', 
  '/api/trabajos', 
  '/api/autos', 
  '/api/usuarios', 
  '/api/repuestos'
]

// Rutas de auth (redirigen si ya está logueado)
const authRoutes = ['/login', '/register']
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: Adaptación fluida en tablet y desktop
- **Touch Friendly**: Elementos interactivos optimizados para touch
- **Performance**: Carga rápida en todas las resoluciones

## 🔧 Scripts Disponibles

```json
{
  "dev": "next dev --turbopack",          // Desarrollo con Turbopack
  "build": "next build --turbopack",      // Build optimizado
  "start": "next start",                  // Servidor de producción
  "lint": "next lint",                    // Linting de código
  "test-db": "ts-node scripts/test-db.ts", // Test de conexión BD
  "postinstall": "prisma generate"        // Auto-generar cliente
}
```

## 🚨 Solución de Problemas

### **Error: EPERM durante `prisma generate`**
```bash
# Detener procesos Node.js
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Limpiar caché de Prisma
Remove-Item -Path "node_modules\.prisma" -Recurse -Force -ErrorAction SilentlyContinue

# Regenerar cliente
pnpm prisma generate
```

### **Error: Puerto en uso**
El servidor automáticamente detecta puertos ocupados y usa el siguiente disponible.

### **Error: Token inválido**
- Verificar que JWT_SECRET esté configurado
- Limpiar cookies del navegador
- Verificar formato del token

## 🤝 Contribuir

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Santiago** - [Benkenovi104](https://github.com/Benkenovi104)

---

⭐ **¡Dale una estrella si este proyecto te ayudó!**
