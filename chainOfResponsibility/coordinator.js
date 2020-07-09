class Coordinator {
  constructor() {
    this.successor = null
  }

  acceptCredit(amount) {
    if(amount <= 10000) {
      console.log("Coordinator accepts credit by ", amount)
    } else {
      this.successor.acceptCredit(amount)
    }
  }
}

module.exports = Coordinator