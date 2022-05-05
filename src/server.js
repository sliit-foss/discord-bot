require("dotenv").config()
const http = require("http")
require("./funcs")
require("./utils/waker")

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Discord bot up and running!');
  res.end();
})

server.listen(port, () => console.log("Server listening on " + port))
