require("dotenv").config();
const http = require("http");
require('./funcs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.status(200).json({ message: "Discord bot up and running" });
});

server.listen(port, () => console.log("Server listening on " + port));
