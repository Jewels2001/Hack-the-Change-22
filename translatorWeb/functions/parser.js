const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const parser = express();
parser.use(cors({ origin: true }));

// Test endpoint
parser.all("", (req, res) => {
  return res
    .status(200)
    .send({ status: "Success", msg: "Hello World from the Parser! :)" });
});

// Scrape HTML from URL
parser.post("/getHTML", (req, res) => {
  (async () => {
    try {
      const URL = req.body.URL;
      return axios.get(URL).then((response) => {
        console.log(response.data);
        var parser = new DOMParser();
        var doc = parser.parseFromString(response.text(), 'text/html');
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
        console.log(final);

        return res
          .status(200)
          .send({
            status: "Success",
            data: response.data,
            info: final
          });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Error", msg: error });
    }
  })();
});

exports.parser = functions.https.onRequest(parser);
