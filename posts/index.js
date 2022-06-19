const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid"); // Import UUID v4
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = uuidv4(); // Generate a UUID
  const { title } = req.body;
  console.log(req.body);
  posts[id] = {
    id,
    title,
  };

  try {
    await axios.post("http://localhost:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });

    res.status(201).send(posts[id]);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Error creating post");
  }
});

app.post("/events", (req, res) => {
  console.log("Received event", req.body.type);

  res.send({});
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
