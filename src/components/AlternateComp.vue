<script>
export default {
  name: 'AlternateComp'
}
</script>

<template>
  <div class="alternateIntro">
    <h1>This will become.... something?</h1>
    <p>If you can see this text then the component is working correctly.</p>
  </div>
</template>

<style scoped>
.alternateIntro {
  background-color: #333;
  padding: 20px;
  border-radius: 5px;
}

h1 {
  color: #ffcc00; /* Bright yellow for good contrast */
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

p {
  color: #00ccff; /* Bright cyan for good contrast */
  font-size: 1.2rem;
}
</style>
