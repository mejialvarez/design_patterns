class FileLogger {

  constructor(filePath) {
    this.filePath = filePath
  }

  write(message) {
    console.log(`Writing logs to ${this.filePath} file: ${message}`)
  }
}

module.exports = FileLogger