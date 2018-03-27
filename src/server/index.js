const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3237;
const { get_posts } = require("./queries");
server.listen(PORT);

// app.get("/", function(req, res) {
//   console.log(__dirname + "index.html");
//   res.sendFile(__dirname + "/index.html");
// });

io.on("connection", socket => {
  console.log("Hello");
  get_posts().then(posts => {
    io.emit("initialPostList", posts);
  });
  // io.emit("initialPostList", {
  //   1: {
  //     id: 1,
  //     title: "React",
  //     description: "Learn React",
  //     votes: 0,
  //     comments: ["It's a very nice article", "When would be lesson 2?"]
  //   },
  //   2: {
  //     id: 2,
  //     title: "Redux",
  //     description: "Learn Redux",
  //     votes: 0,
  //     comments: ["It's a very nice article", "When would be lesson 2?"]
  //   }
  // });
});
