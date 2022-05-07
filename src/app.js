const express = require("express")
const cors = require("cors")
const router = require("./api/routes/index.routes")
const morgan = require("morgan")

const app = express()

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: false }))

app.use(cors({ origin: true}))
app.use("/api/v1/", router)
app.use(morgan("dev"))

global.__basedir = __dirname

module.exports = app
