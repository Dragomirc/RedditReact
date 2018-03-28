const db_connections = require("./database/db_connections");

const getPostsQuery = () => {
  return db_connections.query(`SELECT * FROM posts`);
};

const addCommentQuery = (comment, id) => {
  return db_connections.query(
    `UPDATE posts SET comments = comments || '{${comment}}' WHERE id=$1`,
    [id]
  );
};

const updateVotesQuery = (value, id) => {
  return db_connections.query(
    `UPDATE posts SET votes = votes + $1 WHERE id=$2`,
    [value, id]
  );
};
module.exports = { getPostsQuery, addCommentQuery, updateVotesQuery };
