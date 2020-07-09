const Connection = require('./connection')

class DBPool {
  constructor(connectionConfig, poolConfig) {
    this.connectionConfig = connectionConfig
    this.poolConfig = poolConfig

    this.connectionsAvailable = []
    this.connectionsInUse = []
  }

  get() {
    if(this.totalConnections() === this.poolConfig.max) throw 'Max connections to database'
    let conn

    if(this.connectionsAvailable.length == 0) {
      conn = new Connection(this.connectionConfig)
      this.connectionsInUse.push(conn)
      return conn
    }

    conn = this.connectionsAvailable[0]
    this.connectionsInUse.push(conn)
    this.connectionsAvailable.shift()
    return conn
  }

  release(conn) {
    if(this.totalConnections() === this.poolConfig.min) throw 'Min connections to database'
    this.connectionsAvailable.push(conn)
    this.connectionsInUse.splice(this.connectionsInUse.indexOf(conn), 1)
  }

  totalConnections() {
    return this.connectionsAvailable.length + this.connectionsInUse.length
  }
}

module.exports = DBPool