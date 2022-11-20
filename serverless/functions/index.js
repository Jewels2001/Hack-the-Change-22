const admin = require("firebase-admin");
admin.initializeApp();

module.exports = {
    ...require("./articles.js"),
    ...require("./parser.js")
}