const express = require("express");
const app = express();
const port = 8080;
const db = require("./Module/datos.json");
const fs = require("fs");

app.get("/", (req, res) => {
  res.json(db);
  res.end();
});

app.post("/", express.json(), (req, res) => {
  const body = req.body;
  db.push(body);
  fs.writeFileSync("./Module/datos.json", JSON.stringify(db), function (err) {
    if (err) throw err;
    console.log("actualizade");
  });
  res.send("received");
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});
