const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3237;
const { getPostsQuery, addCommentQuery } = require("./queries");
server.listen(PORT);

// app.get("/", function(req, res) {
//   console.log(__dirname + "index.html");
//   res.sendFile(__dirname + "/index.html");
// });

io.on("connection", socket => {
  getPostsQuery().then(posts => {
    io.emit("initialPostList", posts);
  });

  socket.on("addComment", ({ commentText, id }) => {
    console.log("hello from the server", commentText);
    addCommentQuery(commentText, id)
      .then(() => getPostsQuery())
      .then(posts => {
        io.emit("initialPostList", posts);
      })
      .catch(err => console.log(err));
  });
});
