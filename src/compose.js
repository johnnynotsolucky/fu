import _sequence from './internals/_sequence'
import reverse from './reverse'

const compose = (...operations) => _sequence(reverse(...operations))
export default compose
