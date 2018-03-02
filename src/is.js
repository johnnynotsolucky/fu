const _curryN = require('./internals/_curryN')
const _is = require('./internals/_is')

const is = _curryN(2, [], _is)
module.exports = is
