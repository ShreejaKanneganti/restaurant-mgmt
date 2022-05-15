const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(30),
    fname Text,
    lname Text,
    user_password VARCHAR(255),
    CONSTRAINT user_pk PRIMARY KEY(user_id)
  )`;
  await con.query(sql);
}
createTable();

let getUsers = async () => {
  const sql = `SELECT * FROM users`;
  return await con.query(sql);
};

async function getUser(user) {
  let sql;
  if(user.userId) {
    sql = `SELECT * FROM users
      WHERE user_id = ${user.userId}
    `;
  } else {
    sql = `SELECT * FROM users
      WHERE username = "${user.username}"
    `;
  }

  return await con.query(sql);
}

async function login(userData) {
  const user = await userExists(userData.uname);
  if(!user[0]) throw Error('User not found')
  if(user[0].user_password !== userData.pswd) throw Error("Password is incorrect");

  return user[0];
}

async function register(user) {
  console.log(user)
  const u = userExists(user.uname);
  if(u.length>0) throw Error("Username already exists");

  const sql = `INSERT INTO users (username, fname, lname, email, user_password)
    VALUES ("${user.uname}", "${user.fname}", "${user.lname}", "${user.email}", "${user.pswd}")
  `;

  const insert = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}

async function deleteUser(userId) {
  const sql = `DELETE FROM users 
    WHERE user_id = ${userId}
  `;
  await con.query(sql);
 
}

async function userExists(username) {
  const sql = `SELECT * FROM users
    WHERE username = "${username}"
  `;
  return await con.query(sql);
}

async function editUser(user) {
  const sql = `UPDATE users SET
    username = "${user.userName}"
    WHERE user_id = ${user.userId}
  `;
  const update = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
}


module.exports = { getUsers, login, register, deleteUser, editUser, getUser, createTable };