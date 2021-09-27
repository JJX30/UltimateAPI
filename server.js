const express = require("express");
const crypto = require("crypto");
const mongoose = require("mongoose");
require("dotenv/config");

const Fighter = require("./models/Fighter.js");
const User = require("./models/User.js");

const auth = async (req, res, next) => {
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

const app = express();
const port = 8000;

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
      console.log("UltimateAPI");
    });
  })
  .catch((err) => console.log(err));

// find fighter based on firstname lastname query
app.get("/v1/:key/ufc/fighters", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/height", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/weight", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/stance", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/record", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/id", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/:id", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/firstname", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/lastname", auth, async (req, res) => {
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
app.get("/v1/:key/ufc/fighters/:id/nickname", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/height", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/weight", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/reach", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/stance", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/wins", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/losses", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/draws", auth, async (req, res) => {
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

app.get("/v1/:key/ufc/fighters/:id/belt", auth, async (req, res) => {
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
