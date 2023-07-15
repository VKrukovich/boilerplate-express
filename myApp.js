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

  var message= 'Hello json';
  app.get("/json", function(req, res) {
    res.json({
  if (process.env.['MESSAGE_STYLE'] === "uppercase") {
    res.json({ "message": message.toUpperCase() });
  } else {  
    res.json({ "message": message });
  }
      });
  });



























 module.exports = app;
