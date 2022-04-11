const mysql = require("mysql2");

const handler = async (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "password",
  });

  connection.execute(
    "SELECT * FROM `news` where active = 1",
    [],
    function (err, results, fields) {
      if (err) throw err;
      return res.json(results);
    }
  );
};

export default handler;
