import _curryN from './internals/_curryN'
import _is from './internals/_is'

const is = _curryN(2, [], _is)
export default is
