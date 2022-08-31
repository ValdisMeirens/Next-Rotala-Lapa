import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "test",
    // port: 8889,
    user: "root",
    password: "",
  });

  try {
    const query =
      "SELECT ID, IMAGE_PATH, YEAR, FOLDER_NAME, PARENT_ID FROM test.gallery";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
