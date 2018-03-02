const _ifElse = (condition, whenTrue, whenFalse) => {
  return (...args) =>
    condition(...args) ? whenTrue(...args) : whenFalse(...args)
}

module.exports = _ifElse
