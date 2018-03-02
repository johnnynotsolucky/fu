const _curryN = require('./internals/_curryN')

const curry = f => _curryN(f.length, [], f)
module.exports = curry
