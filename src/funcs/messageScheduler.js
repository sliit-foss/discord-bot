const client = require("../libs/client")
const exceptionHandler = require("../utils/exceptionHandler")

const interval = 1000 * 60 * 60 * 24

const timeTillTwelve =
  (new Date().setHours(0, 0, 0, 0) - new Date().getTime()) * - 1

client.on("ready", () => {
  exceptionHandler(() => {
    const general = client.channels.cache.get("844968813908983824")
    setTimeout(() => {
      setInterval(() => {
        general.send("Good morning!")
      }, interval)
    }, timeTillTwelve)
  })
})
