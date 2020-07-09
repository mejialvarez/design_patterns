class XMLDoc {
  accept(v) {
    v.visitXml(this);
  }
}

module.exports = XMLDoc