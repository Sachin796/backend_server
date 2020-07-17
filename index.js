require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const serverroutes = require("./routes/index");
var cors = require("cors");

const port = process.env.PORT || 3001;
dbConnect();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(serverroutes);

app.listen(port, () => console.log(`Server running on port number ${port} 🔥`));
