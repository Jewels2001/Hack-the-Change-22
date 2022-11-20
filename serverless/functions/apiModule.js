const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.firestore();
const express = require("express");
const cors = require("cors");
const articles = express();
articles.use(cors({ origin: true }));

// Root endpoint. For testing purposes
articles.all("", (req, res) => {
  return res
    .status(200)
    .send({ status: "Success", msg: "Hello World from the API! :)" });
});

// Create an article via POST
articles.post("/createArticle", (req, res) => {
  (async () => {
    try {
      const idString = "article" + Date.now().toString();
      await db.collection("articles").doc(idString).create({
        id: idString,
        title: req.body.title,
        body: req.body.body,
      });

      return res
        .status(200)
        .send({ status: "Success", msg: "Article successfully created" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Error", msg: error });
    }
  })();
});

// Get all articles via GET
articles.get("/getArticles", (req, res) => {
  (async () => {
    try {
      let articles = [];
      await db
        .collection("articles")
        .get()
        .then((data) => {
          data.docs.map((doc) => {
            const article = {
              id: doc.data().id,
              title: doc.data().title,
              body: doc.data().body,
            };
            articles.push(article);
          });
          return articles;
        });

      return res.status(200).send({ status: "Success", data: articles });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Error", msg: error });
    }
  })();
});

// Get specific article by id via GET
articles.get("/getArticle/:id", (req, res) => {
  (async () => {
    try {
      const idString = req.params.id;
      let doc = await db.collection("articles").doc(idString).get();

      return res.status(200).send({ status: "Success", data: doc.data() });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ status: "Error", msg: error });
    }
  })();
});

exports.articles = functions.https.onRequest(articles);
