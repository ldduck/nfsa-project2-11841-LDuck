<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav class="links">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/alternate">Alternate</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
}
.links a {
  text-decoration: none;
  color: white;
}

.links :visited {
  color: #ffcc00;
  font-size: 1.2rem;
}
</style>
