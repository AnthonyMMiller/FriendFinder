// Dependencies
var path = require("path");

/*--ROUTING--*/
module.exports = function (app) {

  //survey
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // default to home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
