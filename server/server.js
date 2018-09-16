var express = require("express");
var bodyParser = require("body-parser");
var { ObjectID } = require("mongodb");
var { mongoose } = require("./db/mongoose.js");
var { Vetted } = require("./models/vetted");

var app = express();
var port = process.env.PORT || 3000;

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

app.get("/vetted", (req, res) => {
  Vetted.find().then(
    vet => {
      res.send({ vet });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/vetted/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Vetted.findById(id)
    .then(vet => {
      if (!vet) {
        return res.status(404).send();
      }
      res.send({ vet });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`App Running at ${port}`);
});
