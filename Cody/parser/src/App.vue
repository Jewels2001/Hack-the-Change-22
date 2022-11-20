<template>
  <h1> app</h1>
  <ScraperCom/>
</template>

<script>
/*
 fetch('./example.html').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
	console.log(html);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});*/

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