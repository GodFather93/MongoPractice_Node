const { MongoClient } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/VettedApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    const db = client.db("VettedApp");

    db.collection("Vetted")
      .find({ completed: true })
      .toArray()
      .then(
        docs => {
          console.log("Vetted");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch Vetted", err);
        }
      );

    client.close();
  }
);
