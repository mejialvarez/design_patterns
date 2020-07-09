// Visitor
class Processor {
  visitXml(xml) {
    console.log("Processing an XML element");
  }

  visitJson(json) {
    console.log("Processing an Json element");
  }
}

module.exports = Processor