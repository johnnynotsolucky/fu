const _sequence = require('./_sequence')
const _is = require('./_is')

const _reverse = x => {
  return _is(String, x)
    ? x
        .split('')
        .reverse()
        .join('')
    : arr.reverse()
}

module.exports = _reverse
