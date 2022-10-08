import { query } from "../../lib/db";

export default async function handler(req, res) {
  const id = req.body.id;
  console.log("req.body.id")
  console.log(" id  " + id)
  console.log(req.body)

  try {
    const querySQL =
      "SELECT ID, IMAGE_PATH, YEAR, FOLDER_NAME, PARENT_ID FROM test.gallery where PARENT_ID = ?";
    const valuesParams = [id];
    console.log(valuesParams)
    const data = await query({ query: querySQL, values: valuesParams });
    res.status(200).json({ results: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
