class LogsHandlder {
  constructor(logger) {
    this.logger = logger
  }

  write(message) {
    this.logger.write(message)
  }
}

module.exports = LogsHandlder