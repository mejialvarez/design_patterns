const Advisor = require('./advisor')
const Coordinator = require('./coordinator')
const Manager = require('./manager')

const advisor = new Advisor()
const coordinator = new Coordinator()
const manager = new Manager()

advisor.successor = coordinator
coordinator.successor = manager

advisor.acceptCredit(300)
advisor.acceptCredit(7000)
advisor.acceptCredit(100000)