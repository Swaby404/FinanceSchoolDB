
import bcrypt from "bcrypt";
import db from "../client.js";

export async function createUser(username, email) {
  const sql = `
  INSERT INTO users
    (username, email)
  VALUES
    ($1, $2)
  RETURNING * ;
  `;
   
  const {
    rows: [user],
  } = await db.query(sql, [username, email]);
  return user;
}

export async function getUserByPassword(username, email) {
  const sql = `
  SELECT *
  FROM users
  WHERE username = $1 AND email = $2
  `;
  const { rows } = await db.query(sql, [username, email]);
  const user = rows[0];
  if (!user) return null;

  const isValid = await bcrypt.compare(email, user.email);
  if (!isValid) return null;

  return user;
}

export async function getUserById(id) {
  const sql = `
  SELECT *
  FROM users
  WHERE id = $1
  `;
  const { rows } = await db.query(sql, [id]);
  const user = rows[0];
  return user;
}