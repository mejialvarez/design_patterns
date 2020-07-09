class Connection {
  constructor(config) {
    this.uuid = Math.random()
    this.config = config
  }
}

module.exports = Connection