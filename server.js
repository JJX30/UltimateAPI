const express = require("express");
const mongoose = require("mongoose");
const Fighter = require("./models/Fighter.js");
require("dotenv/config");

const app = express();
const port = 3000;

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
    });
  })
  .catch((err) => console.log(err));

//ROUTES

app.get("/v1/fighters", async (req, res) => {
  try {
    const result = await Fighter.find();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong!");
  }
});

//ROUTES by ID
app.get("/v1/fighters/:id", async (req, res) => {
  try {
    const fighterInfo = await Fighter.findOne({ _id: req.params.id });
    res.status(200).json(fighterInfo);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/firstname", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      firstname: result.firstname,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/lastname", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      lastname: result.lastname,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});
app.get("/v1/fighters/:id/nickname", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      nickname: result.nickname,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/height", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      height: result.height,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/weight", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      weight: result.weight,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/reach", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      reach: result.reach,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/stance", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      stance: result.stance,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/wins", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      wins: result.wins,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/losses", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      losses: result.losses,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/draws", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      draws: result.draws,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/:id/belt", async (req, res) => {
  try {
    const result = await Fighter.findOne({ _id: req.params.id }).lean();
    const response = {
      belt: result.belt,
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(404).send("Could not find by ID!");
  }
});

app.get("/v1/fighters/find", async (req, res) => {
  switch (req.query) {
    case req.query.firstname:
      const queryFirstname = req.query.firstname;
      const result = await Fighter.find({ firstname: queryFirstname });
      res.status(200).json(result);

    case req.query.lastname:
      const queryLastname = req.query.lastname;
      const result = await Fighter.find({ firstname: queryLastname });
      res.status(200).json(result);

    case req.query.nickname:
      const queryNickname = req.query.nickname;
      const result = await Fighter.find({ firstname: queryNickname });
      res.status(200).json(result);

    case req.query.height:
      const queryHeight = req.query.nickname;
      const result = await Fighter.find({ firstname: queryHeight });
      res.status(200).json(result);

    case req.query.weight:
      const queryWeight = req.query.weight;
      const result = await Fighter.find({ firstname: queryWeight });
      res.status(200).json(result);

    case req.query.reach:
      const queryReach = req.query.weight;
      const result = await Fighter.find({ firstname: queryReach });
      res.status(200).json(result);

    case req.query.stance:
      const queryStance = req.query.stance;
      const result = await Fighter.find({ firstname: queryStance });
      res.status(200).json(result);

    case req.query.wins:
      const queryWins = req.query.wins;
      const result = await Fighter.find({ firstname: queryWins });
      res.status(200).json(result);

    case req.query.losses:
      const queryLosses = req.query.losses;
      const result = await Fighter.find({ firstname: queryLosses });
      res.status(200).json(result);

    case req.query.draws:
      const queryDraws = req.query.draws;
      const result = await Fighter.find({ firstname: queryDraws });
      res.status(200).json(result);

    case req.query.belt:
      const queryBelt = req.query.belt;
      const result = await Fighter.find({ firstname: queryBelt });
      res.status(200).json(result);
  }
});

// if (req.query.lastname) {
//   try {
//     const result = await Fighter.find({
//       lastname: { $regex: new RegExp(req.query.firstname, "i") },
//     });
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(404).send("Could not find fighter by queries");
//   }
