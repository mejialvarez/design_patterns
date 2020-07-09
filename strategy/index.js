const ConsoleLogger = require('./consoleLogger')
const FileLogger = require('./fileLogger')
const LogsHandler = require('./logsHandler')


const consoleLogger = new ConsoleLogger()
const fileLogger = new FileLogger('/logs')

let logsHandler = new LogsHandler(consoleLogger)
for (let i = 1 ; i<=10; ++i) {
  logsHandler.write("*".repeat(i))
}

logsHandler = new LogsHandler(fileLogger)
for (let i = 1 ; i<=10; ++i) {
  logsHandler.write("*".repeat(i))
}