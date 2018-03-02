import _curryN from './internals/_curryN'

const curry = f => _curryN(f.length, [], f)
export default curry
