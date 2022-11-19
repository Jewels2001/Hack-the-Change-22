<template>
  <h1> parser</h1>
</template>

<script>
fetch('example.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (text)  {
      console.log(text);
    });

export default {
  name: 'App',
  components: {
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
