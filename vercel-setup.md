# Configuración de Variables de Entorno en Vercel

Para que el login funcione correctamente en producción, necesitas configurar las siguientes variables de entorno en tu proyecto de Vercel:

## Variables Requeridas:

1. **JWT_SECRET**: La clave secreta para firmar los tokens JWT
   - Valor: `tu-clave-secreta-super-segura-aqui-cambiar-en-produccion`
   - O genera una nueva clave segura para producción

2. **DATABASE_URL**: La URL de conexión a la base de datos
   - Valor: Ya está configurada en tu .env.local

## Cómo configurar en Vercel:

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto "Proyecto-Autos"
3. Ve a la pestaña "Settings"
4. Busca la sección "Environment Variables"
5. Añade cada variable:
   - Name: `JWT_SECRET`
   - Value: `tu-clave-secreta-super-segura-aqui-cambiar-en-produccion`
   - Environment: Production, Preview, Development (selecciona todos)

6. Haz un redeploy del proyecto después de configurar las variables

## Debugging:

Los logs adicionales que hemos añadido te ayudarán a identificar exactamente dónde está el problema:

- Revisa la consola del navegador para ver los logs del frontend
- Revisa los logs de Vercel (Functions tab) para ver los logs del backend
- Los logs te dirán exactamente en qué paso falla el proceso de login

## Problemas Comunes:

1. **JWT_SECRET no configurado**: Los tokens no se pueden generar/verificar
2. **Cookies no se configuran correctamente**: Problemas de dominio/HTTPS
3. **Middleware bloquea el acceso**: Token no se lee correctamente