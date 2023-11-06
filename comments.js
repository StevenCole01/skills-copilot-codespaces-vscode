// Create a web server
const express = require('express');
const app = express();
// Create a connection to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
// Create a schema of a document
const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
// Create a model of a document
const Comment = mongoose.model('Comment', commentSchema);
// Create a middleware to parse the body of the request
app.use(express.json());
// Create a route handler
app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});
// Create a route handler
app.post('/api/comments', async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  await comment.save();
  res.send(comment);
});
// Create a route handler
app.put('/api/comments/:id', async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }, { new: true });
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');
  res.send(comment);
});
// Create a route handler
app.delete('/api/comments/:id', async (req, res) => {
  const comment = await Comment.findByIdAndRemove(req.params.id);
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');
  res.send(comment);
});
// Create a route handler
app.get('/api/comments/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');
  res.send(comment);
});
// Create a route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});
// Create a route handler
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
})