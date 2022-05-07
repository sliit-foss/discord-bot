const exceptionHandler = (fn) => (req, res, next) => {
  try {
    fn(req, res, next)
  } catch (err) {
    console.log(err)
    if (res) return res.status(500).json({ error: err.message })
  }
}

module.exports = exceptionHandler
