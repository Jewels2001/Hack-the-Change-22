import fetch from "node-fetch";


function main() {
fetch('https://w3collective.com/scrape-sever-side-content-javascript/').then(function (response) {
      return response.text();
  }).then(function (html) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
    console.log(doc);
  });
}

import fetch from 'cross-fetch';
// Or just: import 'cross-fetch/polyfill';
function main2() {
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
}