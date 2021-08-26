const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const port = 3000;
const fighter = require("./models/Fighter.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.post("/figher/:id", (req, res) => {});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to Database!");
  }
);

//LISTENING PORT
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
