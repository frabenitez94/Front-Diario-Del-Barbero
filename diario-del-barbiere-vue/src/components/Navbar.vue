<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">🧔 Diario del Barbiere</h1>
      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>

        <!-- Cliente -->
        <li v-if="usuario && usuario.rol === 'cliente'">
          <router-link to="/mis-citas">Mis Citas</router-link>
        </li>
        <li v-if="usuario && usuario.rol === 'cliente'">
          <router-link to="/agendar">Agendar</router-link>
        </li>

        <!-- Barbero -->
        <li v-if="usuario && usuario.rol === 'barbero'">
          <router-link to="/barbero">Panel Barbero</router-link>
        </li>

        <!-- Login -->
        <li v-if="!usuario">
          <router-link to="/login">Ingresar</router-link>
        </li>

        <!-- Sesión activa -->
        <li v-if="usuario">
          <span class="user-info">Hola, {{ usuario.nombre }}</span>
          <button @click="logout" class="logout-btn">Cerrar sesión</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import eventBus from '../eventBus'

export default {
  name: 'Navbar',
  data() {
    return {
      usuario: null
    }
  },
  mounted() {
    const usuarioStorage = localStorage.getItem('usuario')
    this.usuario = usuarioStorage ? JSON.parse(usuarioStorage) : null

    // Reactividad al iniciar sesión
    eventBus.on('usuarioActualizado', (usuarioNuevo) => {
      this.usuario = usuarioNuevo
    })
  },
  methods: {
    logout() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('usuario')
      this.usuario = null
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #1f1f1f;
  color: white;
  padding: 1rem 2rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.nav-links a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
.logout-btn {
  background: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
}
.user-info {
  margin-right: 1rem;
}
</style>
