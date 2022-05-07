const axios = require("../libs/axios")

setInterval(() => {
  axios.get("/").catch((err) => console.log(err))
}, 3540000)
