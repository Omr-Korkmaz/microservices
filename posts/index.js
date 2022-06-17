const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data store for posts
const posts = {};

// Route to get all posts
app.get("/posts", (req, res) => {
  res.send(posts);
});

// Route to create a new post
app.post("/posts", async (req, res) => {
  // Generate a unique ID for the post
  const id = uuidv4();
  
  // Extract the title from the request body
  const { title } = req.body;

  // Create a new post object
  const newPost = {
    id,
    title,
  };

  // Add the new post to the in-memory store
  posts[id] = newPost;


  // Send a successful response with the created post
  res.status(201).send(newPost);
});



// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
