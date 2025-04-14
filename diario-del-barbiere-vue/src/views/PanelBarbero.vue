
<template>
  <div class="panel-barbero">
    <h2>Panel de Barbero</h2>
    <div class="citas-pendientes">
      <h3>Citas Pendientes</h3>
      <div v-for="cita in citasPendientes" :key="cita.id" class="cita-card">
        <p>Cliente: {{ cita.cliente?.nombre }}</p>
        <p>Fecha: {{ cita.fechaHora }}</p>
        <p>Servicio: {{ cita.servicio?.nombre }}</p>
        <div class="actions">
          <button @click="actualizarEstadoCita(cita.id, 'confirmada')" class="confirm">
            Confirmar
          </button>
          <button @click="actualizarEstadoCita(cita.id, 'cancelada')" class="cancel">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PanelBarbero',
  data() {
    return {
      citasPendientes: []
    }
  },
  async created() {
    const barberoId = localStorage.getItem('userId')
    try {
      const response = await axios.get(`https://localhost:7088/api/cita/barbero/${barberoId}`)
      this.citasPendientes = response.data.filter(cita => cita.estado === 'pendiente')
    } catch (error) {
      console.error('Error al cargar citas:', error)
    }
  },
  methods: {
    async actualizarEstadoCita(citaId, estado) {
      try {
        await axios.put(`https://localhost:7088/api/cita/${citaId}`, { estado })
        this.citasPendientes = this.citasPendientes.filter(c => c.id !== citaId)
      } catch (error) {
        console.error('Error al actualizar cita:', error)
      }
    }
  }
}
</script>

<style scoped>
.panel-barbero {
  padding: 20px;
}

.cita-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}

.actions {
  display: flex;
  gap: 10px;
}

button.confirm {
  background-color: #28a745;
}

button.cancel {
  background-color: #dc3545;
}

button {
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
