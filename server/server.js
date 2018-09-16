var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose.js");
var { Vetted } = require("./models/vetted");

var app = express();

app.use(bodyParser.json());

app.post("/vetted", (req, res) => {
  var vetted = new Vetted({
    fname: req.body.fname
  });

  vetted.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("App Running at 3000 PORT");
});
