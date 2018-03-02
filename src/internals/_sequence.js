import _lazily from './_lazily'
import _equals from './_equals'

const _sequence = (...operations) => {
  const lazyEqualsZero = _lazily(_equals(0))
  const apply = (result, operation, index) => {
    return index === 0
      ? operation(...result)
      : operation(result)
  }
  return (...o) => operations.reduce(apply, o)
}

export default _sequence
