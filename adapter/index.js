const EmailMarketingService = require('./emailMarketingService')
const WebTrackingService = require('./webTrackingService')
const InboxService = require('./inboxServiceAdapter')

const emailMarketingService = new EmailMarketingService()
const webTrackingService = new WebTrackingService()
const inboxService = new InboxService()

emailMarketingService.activate()
webTrackingService.activate()
inboxService.activate()

emailMarketingService.deactivate()
webTrackingService.deactivate()
inboxService.deactivate()