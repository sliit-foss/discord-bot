const exceptionHandler = require("../../utils/exceptionHandler")
const makeResponse = require("../../utils/response")
const client = require("../../libs/client")

const getMemberCount = exceptionHandler(async (req, res, next) => {
  const server = await client.guilds.fetch(process.env.SERVER_ID)
  return makeResponse({
    res,
    message: "Member count retrieved successfully",
    data: server.memberCount || server.approximateMemberCount,
  })
})

module.exports = {
  getMemberCount,
}
