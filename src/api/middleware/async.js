const makeResponse = require("../../utils/response")

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) =>
    makeResponse({ res, success: false, message: err })
  )
}

module.exports = asyncHandler
