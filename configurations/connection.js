import mysql from "mysql";


console.log()
export const pool = mysql.createPool({
  host: process.env.HOST ,
  user: process.env.USER,
  password: '',
  database: process.env.DATABASE,
  connectionLimit:10
});
