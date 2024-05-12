const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routers/authRouter');
const topicRouter = require('./routers/topicRouter');
const postRouter = require('./routers/postRouter');
const commentRouter = require('./routers/commentRouter');
const cors = require('cors');
const app = express();

app.use(cors(
  {
     origin: "http://localhost:4200"
  }

));

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



app.use('/api', authRouter);
app.use('/api', topicRouter);
app.use('/api', postRouter);
app.use('/api', commentRouter);


mongoose.connect('mongodb+srv://esikcsab:wczxJJUFKskb4bk3@forumcluster.btfiu1p.mongodb.net/?retryWrites=true&w=majority&appName=ForumCluster')
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });