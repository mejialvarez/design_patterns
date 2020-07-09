const Processor = require('./processor')
const JSONDoc = require('./jsonDoc')
const XMLDoc = require('./xmlDoc')

const processor = new Processor()
const json1 = new JSONDoc()
const json2 = new JSONDoc()
const xml = new XMLDoc()

const documents = []
documents.push(json1)
documents.push(json2)
documents.push(xml)

documents.forEach(doc => {
  doc.accept(processor)
})