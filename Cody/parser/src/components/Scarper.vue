<template>
    <h1> parser</h1>
  </template>
  
  <script>
  import fetch from 'cross-fetch';
// Or just: import 'cross-fetch/polyfill';

fetch('https://snyk.io/advisor/npm-package/parse5/functions/parse5.parse')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.text();
  })
  .then(user => {
    var parser = new DOMParser();
      var doc = parser.parseFromString(user, 'text/html');
    console.log(doc);
  })
  .catch(err => {
    console.error(err);
  });
  //const puppeteer = require('puppeteer');
  /*const axios = require("axios");
const cheerio = require("cheerio");

const fetchTitles = async () => {
  const response = await        axios.get('https://old.reddit.com/r/movies/');

        const html = response.data;

  const $ = cheerio.load(html);

  const titles = [];

  $('div > p.title > a').each((_idx, el) => {
   const title = $(el).text()
   titles.push(title)
  });

  return titles;
 };

fetchTitles().then((titles) => console.log(titles));*/
  /*
  fetch('https://w3collective.com/scrape-sever-side-content-javascript/').then(function (response) {
      return response.text();
  }).then(function (html) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
    console.log(doc);
  });
  */
  export default {
    name: 'ScraperCom',
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