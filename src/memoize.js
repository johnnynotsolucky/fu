const _curryN = require('./internals/_curryN')
const _memoizeWith = require('./internals/_memoizeWith')

const keyF = (...args) => args.toString()

const memoize = _curryN(2, [], _memoizeWith)(keyF)
module.exports = memoize
