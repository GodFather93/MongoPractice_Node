var mongoose = require("mongoose");

var Vetted = mongoose.model("Vetted", {
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  skills: [{ label: String, value: String }],
  sex: { type: String },
  country: { label: { type: String }, value: { type: String } },
  hasEmail: Boolean,
  files: [
    {
      preview: String,
      name: String,
      lastModified: Number,
      lastModifiedDate: Date,
      webKitRelativePath: String
    }
  ],
  content: String
});

module.exports = { Vetted };
