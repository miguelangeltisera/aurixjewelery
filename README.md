
# AURIX - Joyas Eternas 💎

Landing page de lujo optimizada para dispositivos móviles y tablets.

## ✅ Solución al error de Netlify
He añadido un archivo `package.json` configurado con **React 18**. Esto soluciona el error `ERESOLVE` que veías en los logs de Netlify, ya que ahora las versiones de React y Lucide-React coinciden perfectamente.

## 🔄 Sincronización con Antigravity
1. Usa el botón de **GitHub** en Antigravity para conectar tu cuenta.
2. Selecciona tu repositorio y dale a **"Push"**. Esto subirá el nuevo `package.json` y el `index.html` corregido.
3. Netlify detectará el cambio y esta vez el despliegue será exitoso (Success).

## 🚀 Configuración Final en Netlify
Si el despliegue falla por "Build command", asegúrate de esto en la web de Netlify (Site settings > Build & deploy):
- **Build command:** Déjalo VACÍO.
- **Publish directory:** `.` (un punto).

---
*AURIX: Lujo patrimonial desde Caracas para el mundo.*
