const express = require("express");
const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv/config");

const cookieParser = require("cookie-parser");
// const session = require("express-session");

const User = require("./models/User.js");
const port = 3001;

app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      console.log("server for frontend");
    });
  })
  .catch((err) => console.log(err));

// app.use(
//   session({
//     key: "user",
//     secret: process.env.ACCESS_TOKEN_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//   })
// );

app.post("/api/changepassword", authToken, async (req, res) => {
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
        const result = await User.findOneAndUpdate(
          { email: req.body.email },
          {
            password: hash,
          }
        );
        if (result !== null) {
          console.log("Password changed successful");
          res.status(200).send({ status: 200 });
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
      status: 404,
    });
  }
});

app.post("/api/changekey", authToken, async (req, res) => {
  console.log("token");
  const newKey = generateAPIKEY();
  const response = await User.findOneAndUpdate(
    { apiKey: req.body.old },
    {
      apiKey: newKey,
    }
  );
  if (response !== null) {
    console.log("Key changed successful");
    res.status(200).json({
      apiKey: newKey,
    });
  } else {
    console.log("Couldn't updates key");
    res.status(404).json({
      status: 404,
    });
  }
});

app.post("/api/changeemail", authToken, async (req, res) => {
  const response = await User.findOneAndUpdate(
    { email: req.body.old },
    { email: req.body.new }
  );
  if (response !== null) {
    console.log("email changed successful");
    res.status(200).json({
      email: req.body.new,
    });
  } else {
    console.log("couldn't change email");
    res.status(404).json({
      status: 404,
    });
  }
});

app.post("/api/signin", isAuth, async (req, res) => {
  const response = await User.findOne({ email: req.body.email });
  if (response !== null) {
    const match = await bcrypt.compare(req.body.password, response.password);
    if (match) {
      console.log("match");

      const token = jwt.sign(
        {
          email: response.email,
          apiKey: response.apiKey,
          registrationDate: response.registrationDate,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "24h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });
      res.status(200).json({
        email: response.email,
        apiKey: response.apiKey,
        registrationDate: response.registrationDate,
      });
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

app.get("/api/auth", (req, res) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      res.json({ payload: user, isAuth: true });
      next();
    } catch (err) {
      res.json({ isAuth: false });
      res.clearCookie("token");
    }
  } else {
    res.json({ isAuth: false });
    res.clearCookie("token");
  }
});

app.get("/api/deletecookie", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "deleted" });
});
// app.get("/api/data", authToken, (req, res) => {
//   console.log("hi");
//   res.json({ name: "mauricio", age: 19 });
// });
// app.get("/api", authToken, (req, res) => {
//   res.send("welp");
// });

function authToken(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      req.user = user;
      next();
    } catch (err) {
      res.clearCookie("token");
      res.end();
    }
  } else {
    res.end();
  }
}

function isAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    next();
  } else {
    res.clearCookie("token");
    console.log("NICE TRy!");
    res.status(404).send({
      error: "auth failed",
    });
  }
}

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
