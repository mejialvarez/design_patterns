const Inbox = require('./inbox')

class InboxServiceAdapter {
  constructor() {
    this.inbox = new Inbox()
  }

  activate() {
    this.inbox.add()
  }

  deactivate() {
    this.inbox.delete()
  }
}

module.exports = InboxServiceAdapter