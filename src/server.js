require("dotenv").config()
const http = require("http")
const app = require("./app")
require("./funcs")
require("./utils/waker")

const port = process.env.PORT || 4000

const server = http.createServer(app)

server.listen(port, () => console.log("Server listening on " + port))
