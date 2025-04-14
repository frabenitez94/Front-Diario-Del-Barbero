
<template>
  <div class="mi-cuenta">
    <h2>Mi Cuenta</h2>
    <div class="profile-form">
      <div class="form-group">
        <label>Nombre</label>
        <input v-model="usuario.nombre" type="text" />
      </div>
      
      <div class="form-group">
        <label>Email</label>
        <input v-model="usuario.email" type="email" disabled />
      </div>
      
      <div class="form-group">
        <label>Teléfono</label>
        <input v-model="usuario.telefono" type="tel" />
      </div>
      
      <button @click="guardarCambios" class="save-btn">
        Guardar Cambios
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MiCuenta',
  data() {
    return {
      usuario: {
        nombre: '',
        email: '',
        telefono: ''
      }
    }
  },
  async created() {
    const userId = localStorage.getItem('userId')
    try {
      const response = await axios.get(`https://localhost:7088/api/usuario/${userId}`)
      this.usuario = response.data
    } catch (error) {
      console.error('Error al cargar usuario:', error)
    }
  },
  methods: {
    async guardarCambios() {
      const userId = localStorage.getItem('userId')
      try {
        await axios.put(`https://localhost:7088/api/usuario/${userId}`, this.usuario)
        alert('Cambios guardados exitosamente')
      } catch (error) {
        console.error('Error al guardar cambios:', error)
      }
    }
  }
}
</script>

<style scoped>
.mi-cuenta {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}

.profile-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input:disabled {
  background-color: #f5f5f5;
}

.save-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}
</style>
