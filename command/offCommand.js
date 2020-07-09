class OffCommand {
  constructor(lamp) {
    this.lamp = lamp
  }

  execute() {
    this.lamp.off()
  }
}

module.exports = OffCommand