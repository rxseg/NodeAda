const http = require("http");
const json = require("./Module/datos");

http
  .createServer((req, res) => {
    const url = new URL(req.url, `http:/localhost/3000`);
    console.log(url);
    res.writeHead(200, "Content-Type", "application/json");
    res.end(JSON.stringify(json));
  })
  .listen(3000);

console.log("Escuchando en el puerto", 3000);

