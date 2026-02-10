# 🎭 Sistema de Trolleo

Sistema web interactivo para enviar y reproducir sonidos entre dos dispositivos.

## 📁 Estructura del Proyecto

```
sistema-trolleo/
├── server.js           # Servidor backend
├── package.json        # Dependencias
├── public/
│   ├── index.html     # Página principal
│   └── sonidos/       # Carpeta para archivos de audio
│       ├── sonido1.mp3
│       ├── sonido2.mp3
│       ├── sonido3.mp3
│       ├── sonido4.mp3
│       └── sonido5.mp3
└── README.md
```

## 🚀 Instalación Local

1. Descarga todo el proyecto
2. Coloca tus archivos de audio (mp3) en la carpeta `public/sonidos/`
3. Abre una terminal en la carpeta del proyecto
4. Instala las dependencias:
   ```bash
   npm install
   ```
5. Inicia el servidor:
   ```bash
   npm start
   ```
6. Abre tu navegador en: `http://localhost:3000`

## 🌐 Despliegue GRATIS en Internet

### Opción 1: Render.com (RECOMENDADO)

1. Crea una cuenta en https://render.com
2. Click en "New +" → "Web Service"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
5. Click en "Create Web Service"
6. ¡Listo! Tu app estará en `https://tu-app.onrender.com`

### Opción 2: Railway.app

1. Crea una cuenta en https://railway.app
2. Click en "New Project" → "Deploy from GitHub repo"
3. Selecciona tu repositorio
4. Railway detectará automáticamente que es Node.js
5. ¡Deploy automático!

### Opción 3: Glitch.com

1. Ve a https://glitch.com
2. Click en "New Project" → "Import from GitHub"
3. Pega la URL de tu repositorio
4. ¡Glitch lo desplegará automáticamente!

### Opción 4: Replit.com

1. Ve a https://replit.com
2. Click en "Create Repl" → "Import from GitHub"
3. Pega tu repositorio
4. Click en el botón "Run"

## 📝 Notas Importantes

### Archivos de Audio
- Debes agregar tus propios archivos de audio MP3
- Nombres: `sonido1.mp3`, `sonido2.mp3`, etc.
- Ubicación: carpeta `public/sonidos/`
- Puedes usar cualquier sonido que quieras

### Código de Acceso
- El código para acceder a comandos es: **82900**
- Puedes cambiarlo editando la línea 360 en `public/index.html`

## 🎮 Cómo Usar

### Modo COMANDOS
1. Click en "COMANDOS"
2. Ingresa el código: 82900
3. Presiona los botones para enviar sonidos

### Modo TROLLEO
1. En otro dispositivo/navegador, abre la misma URL
2. Click en "TROLLEO"
3. ¡Los sonidos se reproducirán automáticamente!

## 🔧 Solución de Problemas

### Los sonidos no se reproducen
- Verifica que los archivos MP3 estén en `public/sonidos/`
- Verifica que los nombres sean exactos: `sonido1.mp3`, etc.
- Algunos navegadores bloquean autoplay, toca la pantalla para activar

### No se conecta al servidor
- Verifica que el servidor esté corriendo
- Revisa que el puerto 3000 esté libre
- En servicios de hosting, verifica que la URL sea correcta

## 📱 Uso en Móviles

- Funciona perfectamente en móviles
- Abre la misma URL en tu teléfono
- Un dispositivo en modo COMANDOS
- Otro dispositivo en modo TROLLEO

## 🔐 Seguridad

Este es un proyecto de diversión, NO uses información sensible:
- El código es simple (82900)
- Los datos se almacenan temporalmente en memoria
- Se borran al reiniciar el servidor

## 💡 Ideas para Mejorar

- Agregar más sonidos (modifica el HTML y server.js)
- Cambiar el código de acceso
- Personalizar los colores y estilos
- Agregar efectos visuales

---

¡Diviértete trolleando! 🎉
