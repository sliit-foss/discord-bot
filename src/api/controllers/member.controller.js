const asyncHandler = require("../middleware/async")
const makeResponse = require("../../utils/response")
const client = require("../../libs/client")

const getMemberCount = asyncHandler(async (req, res, next) => {
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
