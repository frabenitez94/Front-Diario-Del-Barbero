<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">🧔 Diario del Barbiere</h1>
      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/login">Ingresar</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
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
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.nav-links a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
