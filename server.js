const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const port = 3000;
const fighter = require("./models/Fighter.js");

//ROUTES
app.get("/api", (req, res) => {
  res.send("hi");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to Database!");
  }
);

//LISTENING PORT
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  console.log("Connecting to Database...");
});
