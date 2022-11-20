const admin = require("firebase-admin");
const firebaseConfig = require("./firebaseConfig.js");
admin.initializeApp(firebaseConfig);

module.exports = {
    ...require("./articles.js"),
    ...require("./parser.js")
}