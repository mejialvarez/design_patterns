class OnCommand {
  constructor(lamp) {
    this.lamp = lamp
  }

  execute() {
    this.lamp.on()
  }
}

module.exports = OnCommand