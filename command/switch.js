class Switch {
  constructor(onCommand, offCommand) {
    this.onCommand = onCommand
    this.offCommand = offCommand
  }

  on() {
    this.onCommand.execute()
  }

  off() {
    this.offCommand.execute()
  }
}

module.exports = Switch