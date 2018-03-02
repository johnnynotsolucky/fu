const _sequence = require('./internals/_sequence')
const reverse = require('./reverse')

const compose = (...operations) => _sequence(reverse(...operations))
module.exports = compose
