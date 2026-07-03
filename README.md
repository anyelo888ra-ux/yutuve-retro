# yutuve-retro
YUTUVE — Plataforma estilo YouTube 2009
YUTUVE es un clon retro de YouTube inspirado en la versión de 2009.
Este proyecto permite crear tu propio sitio de videos usando Node.js, Express, y Render.

🚀 Características
Subida de videos

Reproductor estilo 2009

Página principal retro

Archivos estáticos en /public

Sistema de rutas con Express

Carpeta /uploads para almacenar videos

Código simple, fácil de modificar

📦 Requisitos
Node.js 18+

Git

Cuenta en GitHub

Cuenta en Render

Navegador web

📁 Estructura del proyecto
Código
yutuve/
│
├── server.js
├── package.json
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── retro.js
│
├── uploads/
│   └── (videos subidos)
│
└── views/
    └── watch.html
🔧 Instalación local
Clona el repositorio:

bash
git clone [https://github.com/TU-USUARIO/yutuve-retro](https://github.com/anyelo888ra-ux/yutuve-retro)
cd yutuve-retro
Instala dependencias:

bash
npm install
Inicia el servidor:

bash
npm start
Abre en tu navegador:

Código
http://localhost:3000
🎥 Subir un video
Entra a la página principal (index.html)

Selecciona un archivo .mp4

Sube el video

Render te devolverá el nombre del archivo

Para verlo, abre:

Código
/watch/NOMBRE_DEL_VIDEO
Ejemplo:

Código
/watch/1720039123999.mp4
🌐 Deploy en Render
Ve a https://render.com

Crea un Web Service

Conecta tu repositorio GitHub

Configura:

Build Command:

Código
npm install
Start Command:

Código
npm start
Deploy

Render te dará un dominio como:

Código
https://yutuve.onrender.com
🧩 Archivos importantes
server.js
Servidor Node.js con Express y Multer para subir videos.

public/index.html
Página principal estilo YouTube 2009.

views/watch.html
Reproductor de video.

retro.js
Efectos retro y mensaje estilo hacker.

👑 Autor
Creado por Anyelo (c00lkiddv)  
Proyecto retro inspirado en YouTube 2009.
