const Caretaker = require('./caretaker')
const Originator = require('./originator')

caretaker = new Caretaker()

originator = new Originator()
originator.status = "A"
originator.status = "B"
originator.status = "C"

caretaker.addMemento(originator.save())
memento1 = caretaker.getMemento(0)
console.log(memento1)

originator.status = "D"
originator.status = "E"
caretaker.addMemento(originator.save())
memento2 = caretaker.getMemento(1)
console.log(memento2)