const _curryN = require('./internals/_curryN')

const partial = (f, ...args) => _curryN(f.length, args, f)
module.exports = partial
