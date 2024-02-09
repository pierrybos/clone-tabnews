import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as total");
  console.log(result.rows);
  return response.status(200).json({ chave: "OK" });
}

export default status;
