import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import MisCitas from '../views/MisCitas.vue'
import PanelBarbero from '../views/PanelBarbero.vue'
import AgendarCita from '../views/AgendarCita.vue'
import Servicios from '../views/Servicios.vue'
import MiCuenta from '../views/MiCuenta.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login 
  },
  {
    path: '/mis-citas',
    name: 'MisCitas',
    component: MisCitas
  },
  {
    path: '/panel-barbero',
    name: 'PanelBarbero',
    component: PanelBarbero
  },
  {
    path: '/agendar',
    name: 'AgendarCita',
    component: AgendarCita
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },
  {
    path: '/mi-cuenta',
    name: 'MiCuenta',
    component: MiCuenta
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
