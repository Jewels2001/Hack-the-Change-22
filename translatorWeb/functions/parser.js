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

        return res
          .status(200)
          .send({
            status: "Success",
            data: response.data
          });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Error", msg: error });
    }
  })();
});

exports.parser = functions.https.onRequest(parser);
