<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav class="links">
      <RouterLink to="/">HOME</RouterLink> |
      <RouterLink to="/search">SEARCH</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  padding: 20px;

  border-bottom: 2px solid green;
}
.links a {
  text-decoration: none;
  color: green;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}
.links a:hover {
  color: #ffffff;
  background-color: green;
}

/* media queries */
@media (max-width: 1024px) {
  nav {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
