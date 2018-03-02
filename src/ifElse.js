const _curryN = require('./internals/_curryN')
const _ifElse = require('./internals/_ifElse')

const ifElse = _curryN(3, [], _ifElse)
module.exports = ifElse
