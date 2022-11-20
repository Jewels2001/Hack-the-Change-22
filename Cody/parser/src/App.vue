<template>
  <h1> app</h1>
  <ScraperCom/>
</template>

<script>
import ScraperCom from "./components/Scarper.vue"
export default {
  name: 'App',
  components: {
    ScraperCom,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>