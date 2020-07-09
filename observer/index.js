const Email = require('./email')
const Slack = require('./slack')
const Person = require('./person')

const email = new Email()
const slack = new Slack()

let person = new Person('Guest')
person.addObserver(email)
person.addObserver(slack)

person.setName("Guest2")