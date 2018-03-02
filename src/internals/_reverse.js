import _sequence from './_sequence'
import _is from './_is'

const _reverse = x => {
  return _is(String, x)
    ? x.split('').reverse().join('')
    : arr.reverse()
}

export default _reverse
