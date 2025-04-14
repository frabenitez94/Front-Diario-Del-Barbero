
<template>
  <div class="agendar-cita">
    <h2>Agendar Cita</h2>
    <div class="form-group">
      <label>Servicio:</label>
      <select v-model="servicioId" @change="cargarHorarios">
        <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.id">
          {{ servicio.nombre }} - ${{ servicio.precio }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Barbero:</label>
      <select v-model="barberoId" @change="cargarHorarios">
        <option v-for="barbero in barberos" :key="barbero.id" :value="barbero.id">
          {{ barbero.nombre }}
        </option>
      </select>
    </div>

    <div v-if="horarios.length" class="horarios">
      <h3>Horarios Disponibles:</h3>
      <button 
        v-for="horario in horarios" 
        :key="horario"
        @click="reservarCita(horario)"
        class="horario-btn">
        {{ horario }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AgendarCita',
  data() {
    return {
      servicios: [],
      barberos: [],
      horarios: [],
      servicioId: '',
      barberoId: ''
    }
  },
  async created() {
    try {
      const [serviciosRes, barberosRes] = await Promise.all([
        axios.get('https://localhost:7088/api/servicio'),
        axios.get('https://localhost:7088/api/usuario').then(res => 
          res.data.filter(u => u.rol === 'barbero')
        )
      ])
      this.servicios = serviciosRes.data
      this.barberos = barberosRes.data
    } catch (error) {
      console.error('Error al cargar datos:', error)
    }
  },
  methods: {
    async cargarHorarios() {
      if (!this.barberoId || !this.servicioId) return
      try {
        const response = await axios.get(
          `https://localhost:7088/api/disponibilidad/barbero/${this.barberoId}/servicio/${this.servicioId}`
        )
        this.horarios = response.data
      } catch (error) {
        console.error('Error al cargar horarios:', error)
      }
    },
    async reservarCita(horario) {
      try {
        await axios.post('https://localhost:7088/api/cita', {
          clienteId: localStorage.getItem('userId'),
          barberoId: this.barberoId,
          servicioId: this.servicioId,
          fechaHora: horario,
          estado: 'pendiente'
        })
        this.$router.push('/mis-citas')
      } catch (error) {
        console.error('Error al reservar cita:', error)
      }
    }
  }
}
</script>

<style scoped>
.agendar-cita {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
}

.horarios {
  margin-top: 20px;
}

.horario-btn {
  margin: 5px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.horario-btn:hover {
  background-color: #0056b3;
}
</style>
