const db_connections = require("./database/db_connections");

const getPostsQuery = () => {
  return db_connections.query(`SELECT * FROM posts`);
};

const addCommentQuery = (comment, id) => {
  console.log("I'm in query", typeof comment);
  return db_connections.query(
    `UPDATE posts SET comments = comments || '{${comment}}' WHERE id=$1`,
    [id]
  );
};
module.exports = { getPostsQuery, addCommentQuery };
