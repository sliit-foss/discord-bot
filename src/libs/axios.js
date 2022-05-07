const axios = require("axios")

const instance = axios.create({
  baseURL: process.env.HEROKU_SERVER_BASE_URL,
})

module.exports = instance
