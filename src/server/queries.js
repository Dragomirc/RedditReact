const db_connections = require("./database/db_connections");

const get_posts = () => {
  return db_connections.query(`SELECT * FROM posts`);
};

module.exports = { get_posts };
