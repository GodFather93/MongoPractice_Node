const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/VettedApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to mongodb server");
    }

    console.log("Connected to mongodb server");

    const db = client.db("VettedApp");

    // db.collection("Vetted").insertOne(
    //   { text: "something to do", completed: false },
    //   (err, res) => {
    //     if (err) {
    //       return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    //   }
    // );

    db.collection("User").insertOne(
      { name: "something to do", age: 12, location: "jodhpur", _id: obj },
      (err, res) => {
        if (err) {
          return console.log("Unable to insert todo", err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
      }
    );

    client.close();
  }
);
