const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3231;
server.listen(PORT);

io.on("connection", socket => {
  socket.emit("initialPosts", {
    1: {
      id: 1,
      title: "React",
      description: "Learn React",
      votes: 0,
      comments: ["It's a very nice article", "When would be lesson 2?"]
    },
    2: {
      id: 2,
      title: "Redux",
      description: "Learn Redux",
      votes: 0,
      comments: ["It's a very nice article", "When would be lesson 2?"]
    }
  });
});
