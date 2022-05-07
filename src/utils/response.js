const makeResponse = ({ res, success = true, message, data = {}, status }) => {
  if (!success) status = status || 500
  else status = status || 200
  return res.status(status).json({
    success,
    message: message.message || message,
    data,
    stack: process.env.NODE_ENV !== "production" ? message.stack : null,
  })
}

module.exports = makeResponse
