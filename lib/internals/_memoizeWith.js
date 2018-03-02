const _has = require('./_has')

const _memoizeWith = (hashF, f) => {
  const cache = {}
  return (...args) => {
    const key = hashF(...args)
    return _has(key, cache) ? cache[key] : (cache[key] = f(...args))
  }
}

module.exports = _memoizeWith
