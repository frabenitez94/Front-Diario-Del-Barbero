
<template>
  <div class="mis-citas">
    <h2>Mis Citas</h2>
    <div v-if="citas.length" class="citas-container">
      <div v-for="cita in citas" :key="cita.id" class="cita-card">
        <h3>Cita {{ cita.fechaHora }}</h3>
        <p>Estado: {{ cita.estado }}</p>
        <p>Servicio: {{ cita.servicio?.nombre }}</p>
        <p>Barbero: {{ cita.barbero?.nombre }}</p>
        <button v-if="cita.estado === 'pendiente'" @click="cancelarCita(cita.id)">
          Cancelar Cita
        </button>
      </div>
    </div>
    <p v-else>No tienes citas programadas</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MisCitas',
  data() {
    return {
      citas: []
    }
  },
  async created() {
    const userId = localStorage.getItem('userId')
    try {
      const response = await axios.get(`https://localhost:7088/api/cita/cliente/${userId}`)
      this.citas = response.data
    } catch (error) {
      console.error('Error al cargar citas:', error)
    }
  },
  methods: {
    async cancelarCita(citaId) {
      try {
        await axios.put(`https://localhost:7088/api/cita/${citaId}`, {
          estado: 'cancelada'
        })
        this.citas = this.citas.filter(c => c.id !== citaId)
      } catch (error) {
        console.error('Error al cancelar cita:', error)
      }
    }
  }
}
</script>

<style scoped>
.mis-citas {
  padding: 20px;
}

.citas-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.cita-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background: white;
}

button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
