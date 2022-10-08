// const mysql = require("mysql2");

// const handler = async (req, res) => {
//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "test",
//     password: "",
//     port: 3306

//   });

//   connection.execute(
//     "SELECT * FROM `gallery_header` where active = 1",
//     [],
//     function (err, results, fields) {
//       if (err) throw err;
//       return res.json(results);
//     }
//   );

//   connection.end();
// };

// export default handler;



import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
  });

  try {
    const query = "SELECT * FROM gallery_header where active = 1";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    return res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
