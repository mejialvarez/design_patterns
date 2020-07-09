class Advisor {
  constructor() {
    this.successor = null
  }

  acceptCredit(amount) {
    if(amount <= 2000) {
      console.log("Advisor accepts credit by ", amount)
    } else {
      this.successor.acceptCredit(amount)
    }
  }
}

module.exports = Advisor