
<template>
  <div class="servicios">
    <h2>Nuestros Servicios</h2>
    <div class="servicios-grid">
      <div v-for="servicio in servicios" :key="servicio.id" class="servicio-card">
        <h3>{{ servicio.nombre }}</h3>
        <p>{{ servicio.descripcion }}</p>
        <p class="duracion">Duración: {{ servicio.duracionMin }} minutos</p>
        <p class="precio">${{ servicio.precio }}</p>
        <button @click="$router.push('/agendar')" class="agendar-btn">
          Agendar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Servicios',
  data() {
    return {
      servicios: []
    }
  },
  async created() {
    try {
      const response = await axios.get('https://localhost:7088/api/servicio')
      this.servicios = response.data
    } catch (error) {
      console.error('Error al cargar servicios:', error)
    }
  }
}
</script>

<style scoped>
.servicios {
  padding: 20px;
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.servicio-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.precio {
  font-size: 1.5em;
  color: #28a745;
  font-weight: bold;
}

.duracion {
  color: #666;
}

.agendar-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
