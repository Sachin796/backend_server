const mongoose = require("mongoose");

const Client = mongoose.model(
  "clients",
  new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    lastname: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
  })
);

module.exports.Client = Client;
