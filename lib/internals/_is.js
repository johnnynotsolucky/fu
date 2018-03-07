const _is = (ctor, x) => {
  const isValid = x !== null && x !== undefined
  return (isValid && x.constructor === ctor) || x instanceof ctor
}

module.exports = _is
