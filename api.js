const express = require("express");
const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv/config");

const User = require("./models/User.js");

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      console.log("server for frontend");
    });
  })
  .catch((err) => console.log(err));

app.post("/api/changepassword", async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response !== null) {
    const match = await bcrypt.compare(req.body.old, response.password);
    if (match) {
      console.log("match");
      bcrypt.hash(req.body.new, 10, async (err, hash) => {
        if (err) {
          console.log("there was an error hashing");
          console.log(err);
        }
        const result = await User.findOneAndReplace(
          { email: req.body.email },
          {
            email: req.body.email,
            password: hash,
            apiKey: req.body.apiKey,
            registrationDate: req.body.registrationDate,
          }
        );
        if (result !== null) {
          console.log("Password changed successful");
          res.status(200).json({
            email: response.email,
            password: hash,
            apiKey: response.apiKey,
            registrationDate: response.registrationDate,
          });
        } else {
          console.log("Couldn't updates password");
          res.status(404).json({
            status: 404,
          });
        }
      });
    } else {
      console.log("wrong pass");
      res.status(404).send({
        error: "auth failed",
        status: 404,
      });
    }
  } else {
    console.log("not found");
    res.status(404).send({
      error: "auth failed",
    });
  }
});

app.post("/api/changekey", async (req, res) => {
  const newKey = generateAPIKEY();
  const response = await User.findOneAndReplace(
    { apiKey: req.body.old },
    {
      email: req.body.email,
      password: req.body.password,
      apiKey: newKey,
      registrationDate: req.body.registrationDate,
    }
  );
  if (response !== null) {
    console.log(response.apiKey);
    console.log("Key changed successful");
    res.status(200).json({
      email: response.email,
      password: response.password,
      apiKey: newKey,
      registrationDate: response.registrationDate,
    });
  } else {
    console.log("Couldn't updates key");
    res.status(404).json({
      status: 404,
    });
  }
});

app.post("/api/changeemail", async (req, res) => {
  const response = await User.findOneAndReplace(
    { email: req.body.old },
    {
      email: req.body.new,
      password: req.body.password,
      apiKey: req.body.apiKey,
      registrationDate: req.body.registrationDate,
    }
  );
  if (response !== null) {
    console.log("email changed successful");
    res.status(200).json(response);
  } else {
    console.log("couldn't change email");
    res.status(404).json({
      status: 404,
    });
  }
});

app.post("/api/signin", async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response !== null) {
    const match = await bcrypt.compare(req.body.password, response.password);
    if (match) {
      console.log("match");
      res.status(200).json(response);
    } else {
      console.log("wrong pass");
      res.status(404).send({
        error: "auth failed",
      });
    }
  } else {
    console.log("not found");
    res.status(404).send({
      error: "auth failed",
    });
  }
});

app.post("/api/signup", async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response === null) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        console.log(err);
      }
      const newUser = new User({
        email: req.body.email,
        password: hash,
        apiKey: generateAPIKEY(),
        registrationDate: new Date().toString(),
      });
      newUser.save();
      console.log("Account successfully created");
    });
    res.status(200).json({ message: "it worked", status: 200 });
  } else {
    console.log("Account creation unsuccessful");
    res.status(404).json({
      message: "Email already in use",
      status: 404,
    });
  }
});

function generateAPIKEY() {
  const rand = crypto.randomBytes(20);

  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let str = "";

  for (let i = 0; i < rand.length; i++) {
    let index = rand[i] % chars.length;
    str += chars[index];
  }
  return str;
}
