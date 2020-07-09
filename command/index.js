const Lamp = require('./lamp')
const OnCommand = require('./onCommand')
const OffCommand = require('./offCommand')
const Switch = require('./switch')

const lamp = new Lamp()
const onCommand = new OnCommand(lamp)
const offCommand = new OffCommand(lamp)
const mySwitch = new Switch(onCommand, offCommand)

mySwitch.on()
mySwitch.off()