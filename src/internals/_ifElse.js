const _ifElse = (condition, whenTrue, whenFalse) => {
  return (...args) =>
    condition(...args) ? whenTrue(...args) : whenFalse(...args)
}

export default _ifElse
