<template>
  <div class="login">
    <h2>Ingresa con tu cuenta</h2>
    <button @click="loginWithGoogle">Iniciar con Google</button>
    <button @click="loginWithFacebook">Iniciar con Facebook</button>
    <button @click="loginWithApple">Iniciar con Apple</button>
  </div>

  <!-- Modal de selección de rol -->
  <div v-if="mostrarModal" class="modal">
    <div class="modal-content">
      <h2>Selecciona tu rol</h2>
      <button @click="seleccionarRol('cliente')">Cliente</button>
      <button @click="seleccionarRol('barbero')">Barbero</button>
    </div>
  </div>
</template>

<script>
import { auth, googleProvider, facebookProvider, signInWithPopup } from '../firebase'
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      mostrarModal: false,
      usuarioSocial: null
    }
  },
  methods: {
    loginWithGoogle() {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user
          this.usuarioSocial = {
            nombre: user.displayName,
            correo: user.email,
            proveedorLogin: 'google'
          }
          this.mostrarModal = true
        })
        .catch((error) => {
          console.error('❌ Error en login Google:', error)
        })
    },
    loginWithFacebook() {
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          const user = result.user
          this.usuarioSocial = {
            nombre: user.displayName,
            correo: user.email,
            proveedorLogin: 'meta'
          }
          this.mostrarModal = true
        })
        .catch((error) => {
          console.error('❌ Error en login Facebook:', error)
        })
    },
    loginWithApple() {
      alert('🔒 Login con Apple pendiente de integrar');
    },
    seleccionarRol(rol) {
      const body = {
        ...this.usuarioSocial,
        rol,
        telefono: '',
        comunaResidencia: ''
      }

      axios.post('https://localhost:7088/api/usuario', body)
        .then(response => {
          console.log('✅ Usuario creado en API:', response.data)
          localStorage.setItem('jwt', response.data.token) // si tu backend devuelve uno
          this.$router.push('/') // redirige a Home u otra vista
        })
        .catch(error => {
          console.error('❌ Error al crear usuario en API:', error)
        })
    }
  }
}
</script>

<style scoped>
.login {
  text-align: center;
  padding: 2rem;
}
button {
  display: block;
  margin: 1rem auto;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
}
.modal-content h2 {
  margin-bottom: 1rem;
}
.modal-content button {
  margin: 0.5rem;
  padding: 0.7rem 2rem;
  font-size: 1rem;
}
</style>
