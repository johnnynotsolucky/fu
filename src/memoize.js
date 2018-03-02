import _curryN from './internals/_curryN'
import _memoizeWith from './internals/_memoizeWith'

const keyF = (...args) => args.toString()

const memoize = _curryN(2, [], _memoizeWith)(keyF)
export default memoize
