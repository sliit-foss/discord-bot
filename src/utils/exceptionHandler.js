const exceptionHandler = (fn) => {
  try {
    fn()
  } catch (err) {
    console.log(err)
  }
}

module.exports = exceptionHandler
