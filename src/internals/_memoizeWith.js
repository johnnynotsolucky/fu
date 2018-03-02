import _has from './_has'

const _memoizeWith = (hashF, f) => {
  const cache = {}
  return (...args) => {
    const key = hashF(...args)
    return _has(key, cache) ? cache[key] : (cache[key] = f(...args))
  }
}

export default _memoizeWith
