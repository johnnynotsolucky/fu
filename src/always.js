const _lazily = require('./internals/_lazily')
const identity = require('./identity')

const always = _lazily(identity)
module.exports = always
