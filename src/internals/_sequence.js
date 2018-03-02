const _lazily = require('./_lazily')
const _equals = require('./_equals')

const _sequence = (...operations) => {
  const lazyEqualsZero = _lazily(_equals(0))
  const apply = (result, operation, index) => {
    return index === 0 ? operation(...result) : operation(result)
  }
  return (...o) => operations.reduce(apply, o)
}

module.exports = _sequence
