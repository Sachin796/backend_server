const mongoose = require("mongoose");
const config = require("config");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = dbConnect;
