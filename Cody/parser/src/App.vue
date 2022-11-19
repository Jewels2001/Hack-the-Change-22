<template>
  <h1> parser</h1>
</template>

<script>
const fetch = require('node-fetch');
const { parse } = require('parse5');

const getDescendantByTag = (node, tag) => {
  for (let i = 0; i < node.childNodes?.length; i++) {
    if (node.childNodes[i].tagName === tag) return node.childNodes[i];

    const result = getDescendantByTag(node.childNodes[i], tag);
    if (result) return result;
  }

  return null;
};

fetch('https://google.com', { redirect: 'manual' })
  .then((response) => response.text())
  .then((text) => {
    console.log(getDescendantByTag(parse(text), 'title'));
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