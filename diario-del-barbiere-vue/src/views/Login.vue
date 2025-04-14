<template>
  <div class="login">
    <h2>Ingresa con tu cuenta</h2>
    <button @click="loginWithGoogle">Iniciar con Google</button>
    <button @click="loginWithFacebook">Iniciar con Facebook</button>
    <button @click="loginWithApple">Iniciar con Apple</button>
  </div>

  <!-- Modal para rol y teléfono -->
  <div v-if="mostrarModal" class="modal">
    <div class="modal-content">
      <h2>Completa tu perfil</h2>
      <p>Selecciona tu rol y escribe tu número de teléfono</p>
      <button @click="seleccionarRol('cliente')">Cliente</button>
      <button @click="seleccionarRol('barbero')">Barbero</button>

      <div v-if="rolSeleccionado">
        <input v-model="telefono" placeholder="Teléfono" />
        <button @click="confirmarRegistro">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, googleProvider, facebookProvider, signInWithPopup } from '../firebase'
import axios from 'axios'
import eventBus from '../eventBus'

export default {
  name: 'Login',
  data() {
    return {
      mostrarModal: false,
      usuarioSocial: null,
      rolSeleccionado: '',
      telefono: ''
    }
  },
  methods: {
    loginWithGoogle() {
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const user = result.user
          this.usuarioSocial = {
            nombre: user.displayName,
            correo: user.email,
            proveedorLogin: 'google'
          }
          this.verificarUsuario()
        })
        .catch(error => {
          console.error('❌ Error en login Google:', error)
        })
    },
    loginWithFacebook() {
      signInWithPopup(auth, facebookProvider)
        .then(result => {
          const user = result.user
          this.usuarioSocial = {
            nombre: user.displayName,
            correo: user.email,
            proveedorLogin: 'meta'
          }
          this.verificarUsuario()
        })
        .catch(error => {
          console.error('❌ Error en login Facebook:', error)
        })
    },
    loginWithApple() {
      alert('🔒 Login con Apple pendiente de integrar');
    },
    verificarUsuario() {
      const correoEncoded = encodeURIComponent(this.usuarioSocial.correo)

      axios.get(`https://localhost:7088/api/Usuario/email/${correoEncoded}`)
        .then(response => {
          const { token, usuario } = response.data
          localStorage.setItem('jwt', token)
          localStorage.setItem('usuario', JSON.stringify(usuario))
          eventBus.emit('usuarioActualizado', usuario)
          this.$router.push('/')
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            this.mostrarModal = true
          } else {
            console.error('❌ Error al verificar usuario:', error)
          }
        })
    },
    seleccionarRol(rol) {
      this.rolSeleccionado = rol
    },
    confirmarRegistro() {
      const body = {
        nombre: this.usuarioSocial.nombre,
        correo: this.usuarioSocial.correo,
        proveedorLogin: this.usuarioSocial.proveedorLogin,
        rol: this.rolSeleccionado,
        telefono: this.telefono
      }

      axios.post('https://localhost:7088/api/usuario', body)
        .then(response => {
          const { token, usuario } = response.data
          localStorage.setItem('jwt', token)
          localStorage.setItem('usuario', JSON.stringify(usuario))
          eventBus.emit('usuarioActualizado', usuario)
          this.$router.push('/')
        })
        .catch(error => {
          console.error('❌ Error al crear o autenticar usuario en API:', error)
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

input {
  display: block;
  margin: 0.5rem auto;
  padding: 0.5rem;
  width: 80%;
  max-width: 300px;
}

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
}</style>
