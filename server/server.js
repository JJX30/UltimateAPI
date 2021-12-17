const express = require("express");
const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const Fighter = require("./models/Fighter.js");
const User = require("./models/User.js");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cookieParser());

const apiAuth = async (req, res, next) => {
  const key = req.params.key;
  const response = await User.findOne({ apiKey: key });
  if (response) {
    console.log(response);
    next();
  } else {
    console.log("not authed");
    res.status(401).json({ error: "Not authorized", status: 401 });
  }
};

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

app.get("/", (req, res) => {
  res.send("<h1>UltimateAPI</h1>");
});

//API ROUTES
app.get("/v1/:key/ufc/fighters", apiAuth, async (req, res) => {
  const queries = Object.keys(req.query);
  const { firstname, lastname } = req.query;
  try {
    if (firstname && lastname) {
      const fighterInfo = await Fighter.find({
        firstname: new RegExp(firstname, "i"),
        lastname: new RegExp(lastname, "i"),
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (firstname) {
      const fighterInfo = await Fighter.find({
        firstname: new RegExp(firstname, "i"),
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (lastname) {
      const fighterInfo = await Fighter.find({
        lastname: new RegExp(lastname, "i"),
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (queries.length === 0) {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    } else {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: {
        message: "internal server error",
        code: 500,
      },
    });
  }
});
// get fighter list based of height
app.get("/v1/:key/ufc/fighters/height", apiAuth, async (req, res) => {
  const { height } = req.query;
  try {
    if (height) {
      const fighterInfo = await Fighter.find({
        stance: height,
      });
      res.status(200).json(fighterInfo);
    } else {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: {
        message: "internal server error",
        code: 500,
      },
    });
  }
});
// get fighter list based off weight
app.get("/v1/:key/ufc/fighters/weight", apiAuth, async (req, res) => {
  const { weight } = req.query;

  try {
    if (weight) {
      const fighterInfo = await Fighter.find({
        weight: new RegExp(weight, "i"),
      });
      res.status(200).json(fighterInfo);
    } else {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: {
        message: "internal server error",
        code: 500,
      },
    });
  }
});
// get fighter list based off stances
app.get("/v1/:key/ufc/fighters/stance", apiAuth, async (req, res) => {
  const { stance } = req.query;

  try {
    if (stance) {
      const fighterInfo = await Fighter.find({
        stance: new RegExp(stance, "i"),
      });
      res.status(200).json(fighterInfo);
    } else {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: {
        message: "internal server error",
        code: 500,
      },
    });
  }
});
// get fighter list based off number of wins
app.get("/v1/:key/ufc/fighters/record", apiAuth, async (req, res) => {
  const { wins, losses, draws } = req.query;
  const queries = Object.keys(req.query);

  try {
    if (wins && losses && draws) {
      console.log("wins,losses,draws");
      const fighterInfo = await Fighter.find({
        wins: wins,
        losses: losses,
        draws: draws,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (wins && losses) {
      const fighterInfo = await Fighter.find({
        wins: wins,
        losses: losses,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (losses && draws) {
      const fighterInfo = await Fighter.find({
        losses: losses,
        draws: draws,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (wins && draws) {
      const fighterInfo = await Fighter.find({
        wins: wins,
        draws: draws,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (wins) {
      const fighterInfo = await Fighter.find({
        wins: wins,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (losses) {
      const fighterInfo = await Fighter.find({
        losses: losses,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (draws) {
      const fighterInfo = await Fighter.find({
        draws: draws,
      });
      if (fighterInfo.length !== 0) {
        res.status(200).json(fighterInfo);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (queries.length === 0) {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    } else {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: {
        message: "internal server error",
        code: 500,
      },
    });
  }
});

// fighter ID's based off firstname and lastname query
app.get("/v1/:key/ufc/fighters/id", apiAuth, async (req, res) => {
  const { firstname, lastname } = req.query;
  const queries = req.query;
  try {
    if (firstname && lastname) {
      const fighterInfo = await Fighter.find({
        firstname: new RegExp(firstname, "i"),
        lastname: new RegExp(lastname, "i"),
      });
      const idList = [];
      fighterInfo.forEach((fighter) => {
        idList.push({
          _id: fighter._id,
        });
      });
      if (idList.length !== 0) {
        res.status(200).json(idList);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (firstname) {
      const fighterInfo = await Fighter.find({
        firstname: new RegExp(firstname, "i"),
      });
      const fighterList = [];
      fighterInfo.forEach((fighter) => {
        fighterList.push({
          _id: fighter._id,
        });
      });
      if (idList.length !== 0) {
        res.status(200).json(idList);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (lastname) {
      const fighterInfo = await Fighter.find({
        lastname: new RegExp(lastname, "i"),
      });
      const fighterList = [];
      fighterInfo.forEach((fighter) => {
        fighterList.push({
          _id: fighter._id,
        });
      });
      if (idList.length !== 0) {
        res.status(200).json(idList);
      } else {
        res.status(204).json({
          status: {
            message: "no content",
            code: 204,
          },
        });
      }
    } else if (queries.length === 0) {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    } else {
      res.status(400).json({
        status: {
          message: "invalid input",
          code: 400,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: {
        message: "internal server error",
        code: 500,
      },
    });
  }
});

// ROUTES by ID
app.get("/v1/:key/ufc/fighters/:id", apiAuth, async (req, res) => {
  try {
    const fighterInfo = await Fighter.findOne({ _id: req.params.id });
    res.status(200).json(fighterInfo);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/firstname", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      firstname: result.firstname,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/lastname", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      lastname: result.lastname,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});
app.get("/v1/:key/ufc/fighters/:id/nickname", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      nickname: result.nickname,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/height", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      height: result.height,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/weight", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      weight: result.weight,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/reach", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      reach: result.reach,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/stance", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      stance: result.stance,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/wins", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      wins: result.wins,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/losses", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      losses: result.losses,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/draws", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      draws: result.draws,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

app.get("/v1/:key/ufc/fighters/:id/belt", apiAuth, async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      belt: result.belt,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: {
        message: "not found",
        code: 404,
      },
    });
  }
});

//CLIENT-API ROUTES
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
    { email: req.body.email },
    {
      apiKey: newKey,
    }
  );
  if (response !== null) {
    console.log("Key changed successful");
    res.clearCookie("token");

    const token = jwt.sign(
      {
        email: response.email,
        apiKey: newKey,
        registrationDate: response.registrationDate,
      },
      "bruh",
      { expiresIn: "24h" }
    );
    res.cookie("token", token, {
      domain: "ultimateapi.tech",
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      status: 200,
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
    res.clearCookie("token");

    const token = jwt.sign(
      {
        email: req.body.new,
        apiKey: response.apiKey,
        registrationDate: response.registrationDate,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    res.cookie("token", token, {
      domain: "ultimateapi.tech",
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({
      status: 200,
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
        "bruh",
        { expiresIn: "24h" }
      );
      res.cookie("token", token, {
        domain: "ultimateapi.tech",
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

app.get("/api/user", authToken, (req, res) => {
  const user = req.user;
  console.log(user);
  res.status(200).json(user);
});

app.get("/api/auth", (req, res) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, "bruh");
      if (user) {
        res.json({ isAuth: true });
      }
    } catch (err) {
      res.clearCookie("token");
      res.json({ isAuth: false });
    }
  } else {
    res.clearCookie("token");
    res.json({ isAuth: false });
  }
});

app.get("/api/signout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "deleted" });
});

function authToken(req, res, next) {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, "bruh");

      req.user = user;
      console.log("auth passed");
      next();
    } catch (err) {
      res.clearCookie("token");
      res.status(404).json({
        status: 404,
        message: "Cookie was tampered with",
      });
    }
  } else {
    console.log("auth token did not pass");
    res.status(404).json({
      status: 404,
      message: "No cookie found",
    });
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
