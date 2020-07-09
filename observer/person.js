class Person {

  constructor(name) {
    this.name = name
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  notify(message) {
    this.observers.forEach(observer => {
      observer.notify(message)
    })
  }

  setName(name) {
    this.name = name
    this.notify(name)
  }
}

module.exports = Person