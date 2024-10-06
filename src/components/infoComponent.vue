<script>
export default {
  name: 'infoComponent'
}
</script>

<template>
  <div class="infoContainer">
    <div class="infoTitle">
      <h1>This will become.... something?</h1>
    </div>
    <div class="infoBody">
      <p>If you can see this text then the component is working correctly.</p>
    </div>
  </div>
</template>

<style scoped>
.infoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-bottom: 2px solid green;
}

/* media queries */
@media (max-width: 1024px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
