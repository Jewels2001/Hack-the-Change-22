<template>
    <h1> parser</h1>
    <div class="translate">{{main()}}</div>
  </template>
  
  <script>
  export default {
    name: 'ScraperCom',
    content: String,
    components: {
    },
    mounted: function() {
        //this.main();
    },
    methods: {
        main: function() {
            fetch('./stream.html').then(function (response) {
                return response.text();
            }).then(function (html) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');
                //var hea = doc.getElementsByTagName('body');
                //var h1 = hea.getElementsByTagName('h1');
                //console.log(hea[0].innerHTML);
                var h1 = doc.getElementsByTagName('h1');
                var h2 = doc.getElementsByTagName('h2');
                var h3 = doc.getElementsByTagName('h3');
                var h4 = doc.getElementsByTagName('h4');
                var p = doc.getElementsByTagName('p');
                var a = doc.getElementsByTagName('a');
                //var text = hea[0].innerHTML;
                var final = '';
                var len = h1.length;
                if(len < h2.length) {
                    len = h2.length;
                }
                if(len < h3.length) {
                    len = h3.length;
                }
                if(len < h4.length) {
                    len = h4.length;
                }
                if(len < p.length) {
                    len = p.length;
                }
                if(len < a.length) {
                    len = a.length;
                }
                for(let i = 0; i < len; i++) {
                    if(i < h1.length) {
                        final =  final + "\n" + h1[i].innerHTML;
                        console.log(h1[i].innerHTML);
                    }
                    if(i < h2.length) {
                        final =  final + "\n" + h2[i].innerHTML;
                        console.log(h2[i].innerHTML);
                    }
                    if(i < h3.length) {
                        final =  final + "\n" + h3[i].innerHTML;
                        console.log(h3[i].innerHTML);
                    }
                    if(i < h4.length) {
                        final =  final + "\n" + h4[i].innerHTML;
                        console.log(h4[i].innerHTML);
                    }
                    if(i < a.length) {
                        //final =  final + "\n" + a[i].innerHTML;
                        console.log(a[i].innerHTML);
                    }
                    if(i < p.length) {
                        final =  final + "\n" + p[i].innerHTML;
                        console.log(p[i].innerHTML);
                    }
                }
                //console.log(text);
                console.log(final);
                return final;
            });
        },
    },
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