# 🧔 Diario del Barbiere - Frontend Vue

Este es el proyecto **frontend** del sistema *Diario del Barbiere*, desarrollado con **Vue 3 + Vite**. Se conecta a una **API REST** construida en .NET, y está pensado para ser desplegado en plataformas como **Cloudflare Pages** o servidores web modernos.

---

## 🚀 Tecnologías utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 📦 Requisitos previos

Antes de comenzar asegúrate de tener instalado:

- **[Node.js LTS](https://nodejs.org/en/download/)** (versión recomendada: 18 o superior)
- **Git** (opcional, pero recomendado)
- **Visual Studio Code** (editor usado en este proyecto)
- (Opcional) Cuenta en **GitHub** para colaborar

---

## ⚙️ Instalación y ejecución local

1. Clona el repositorio (o descárgalo como ZIP):

```bash
git clone https://github.com/frabenitez94/diario-del-barbiere-vue.git
cd diario-del-barbiere-vue

2. Instala las dependencias:

```bash
npm install

3. Inicia el servidor de desarrollo:

npm run dev


🔗 Conexión con la API REST

https://localhost:5001/api

🔐 Autenticación
El sistema usa autenticación basada en token JWT, almacenado en localStorage.
Las llamadas a endpoints protegidos se realizan usando Axios con encabezado Authorization: Bearer {token}.


🗂 Estructura del proyecto
Front-DiarioDelBarbiere/
├── public/                    # Archivos públicos (favicon, index.html base)
├── src/                       # Código fuente principal
│   ├── assets/                # Archivos estáticos como imágenes, íconos, etc.
│   ├── components/            # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── router/                # Configuración de rutas (vue-router)
│   │   └── index.js
│   ├── services/              # Configuración de Axios y servicios a API
│   ├── views/                 # Vistas principales (Home.vue, Login.vue, etc.)
│   ├── App.vue                # Componente raíz
│   └── main.js                # Punto de entrada de la aplicación
├── .gitignore
├── index.html
├── package.json              # Dependencias y scripts
├── README.md
└── vite.config.js            # Configuración de Vite


🧑‍💻 En desarrollo actualmente
✅ Página principal (Home.vue)

⏳ Navbar con rutas

⏳ Login con conexión a API y token JWT

⏳ Vistas protegidas (Dashboard, Mantenedores, etc.)

⏳ Estilos (TailwindCSS o Bootstrap)



👥 Colaboración

# 1. Haz un fork del repositorio
# 2. Crea tu rama
git checkout -b nombre/funcionalidad

# 3. Realiza tus cambios
# 4. Haz commit y push
git add .
git commit -m "Agrega componente X"
git push origin nombre/funcionalidad



☁️ Despliegue

npm run build



📧 Autor
Francisco Benítez
GitHub @frabenitez94
📫 frabenitez94@gmail.com
📍 Chile