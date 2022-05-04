const exceptionHandler = (func) => {
  try {
    func()
  } catch (err) {
    console.log(err)
  }
}

module.exports = exceptionHandler
