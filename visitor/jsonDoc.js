class JSONDoc {
  accept(v) {
    v.visitJson(this);
  }
}

module.exports = JSONDoc