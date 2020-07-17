const mongoose = require("mongoose");

const Student = mongoose.model(
  "students",
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
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 10,
    },
  })
);

module.exports.Student = Student;
