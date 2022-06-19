const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // Import UUID v4
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = uuidv4(); // Generate a UUID
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  try {
    await axios.post('http://localhost:4005/events', {
      type: 'CommentCreated',
      data: {
        id: commentId,
        content,
        postId: req.params.id,
      },
    });

    res.status(201).send(comments);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).send('Error creating comment');
  }
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
