import _lazily from './internals/_lazily'
import identity from './identity'

const always = _lazily(identity)
export default always
