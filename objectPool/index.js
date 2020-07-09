const DBPool = require('./dbPool')

const dbPool = new DBPool(
  {
    user: 'admin',
    password: 'admin',
    url: 'url'
  },
  {
    min: 1,
    max: 5
  }
)

let conn = dbPool.get()
console.log('Get Connection')
console.log('Connection UUID: ', conn.uuid)
console.log('Connections: ', dbPool.totalConnections())

conn = dbPool.get()
console.log('\n')
console.log('Get Connection')
console.log('Connection UUID: ', conn.uuid)
console.log('Connections: ', dbPool.totalConnections())

conn = dbPool.get()
console.log('\n')
console.log('Get Connection')
console.log('Connection UUID: ', conn.uuid)
console.log('Connections: ', dbPool.totalConnections())

dbPool.release(conn)
console.log('\n')
console.log('Release Connection')
console.log('Connection UUID: ', conn.uuid)
console.log('Connections: ', dbPool.totalConnections())

conn = dbPool.get()
console.log('\n')
console.log('Get Connection')
console.log('Connection UUID: ', conn.uuid)
console.log('Connections: ', dbPool.totalConnections())
