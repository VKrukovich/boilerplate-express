let express = require('express');
let app = express();
require('dotenv').config()
/*
console.log("Hello World");
app.get("/", function(req, res) {
    res.send("Hello Express");
  });


  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

// Normal usage
  app.use(express.static(__dirname + "/public"));
// Assets at the /public route
  app.use("/public", express.static(__dirname + "/public"));


app.get("/json", function(req, res) {
    res.json({
        message: "Hello json"
      });
  });
  */


  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
























 module.exports = app;
