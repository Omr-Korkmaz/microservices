const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  // Generate a unique ID for the comment
  const commentId = uuidv4();
  
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;



const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
