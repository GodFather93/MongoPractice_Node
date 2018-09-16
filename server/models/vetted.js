var mongoose = require("mongoose");

var Vetted = mongoose.model("Vetted", {
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  skills: { type: [{ label: String, value: String }] },
  sex: { type: String },
  country: [{ label: String, value: String }],
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
