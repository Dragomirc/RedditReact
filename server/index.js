const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3237;
const {
  getPostsQuery,
  addCommentQuery,
  updateVotesQuery
} = require("./queries");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("my-app/build"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "my-app", "build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

io.on("connection", socket => {
  getPostsQuery().then(posts => {
    io.emit("initialPostList", posts);
  });

  socket.on("addComment", ({ commentText, id }) => {
    addCommentQuery(commentText, id)
      .then(() => getPostsQuery())
      .then(posts => {
        io.emit("initialPostList", posts);
      })
      .catch(err => console.log(err));
  });
  socket.on("updateVotes", ({ value, id }) => {
    updateVotesQuery(value, id)
      .then(() => getPostsQuery())
      .then(posts => {
        io.emit("initialPostList", posts);
      })
      .catch(err => console.log(err));
  });
});
