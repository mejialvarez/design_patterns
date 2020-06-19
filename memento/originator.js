const Memento = require('./memento')
class Originator {
  save() {
    return new Memento(this.status)
  }

  restore(memento) {
    this.status = memento.status
  }
}

module.exports = Originator