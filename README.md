## RedditReact

Deployed [here](https://dragomirc.github.io/CFWebsocketApp/)

A real-time web application where you can vote and add comments through socket.io

### Instructions on how to run the project

1. `git clone https://github.com/Dragomirc/RedditReact.git`

2. `npm i`
3. Set up a local database as per below instructions:

* Connect to postgres, by typing `psql` in the terminal on MAC, and `sudo -u postgres psql` on ubuntu.
* Create the database by typing `CREATE DATABASE [the name of the database];`.
* Create a superuser with a password by typing `CREATE USER [the new username] WITH SUPERUSER PASSWORD '[the password of the database]';` (the password needs to be in quotes, otherwise you get an error).
* Change ownership of the database to the new user by typing `ALTER DATABASE [name of the database] OWNER TO [the new username];`
* Add a config.env file in the root folder and add the database's url in this format: `DATABASE_URL = postgres://[username]:[password]@localhost:5432/[database]`. The database name needs to be in lower case.

4. Build the database by running `node` + correct path + `/RedditReact/src/server/database/db_build.js`
5. `npm start`

### Tech stack

React,Redux,Express,Postgres and Socket.io
