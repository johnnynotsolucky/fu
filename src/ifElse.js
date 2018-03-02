import _curryN from './internals/_curryN'
import _ifElse from './internals/_ifElse'

const ifElse = _curryN(3, [], _ifElse)
export default ifElse
