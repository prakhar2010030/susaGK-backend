import mysql from "mysql";


console.log()
export const pool = mysql.createPool({
  host: "bnfcwznwc11qwl02jp18-mysql.services.clever-cloud.com" ,
  user: "uz6xqnucf5begqeb",
  password: "0zJbShvPzOt3jFY0P7Id",
  database: "bnfcwznwc11qwl02jp18",
  connectionLimit:10
});
