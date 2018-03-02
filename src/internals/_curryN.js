const _curryN = (n, applied, f) => {
  return (...args) => {
    const combined = [...applied, ...(args || [])]
    return combined.length >= n ? f(...combined) : _curryN(n, combined, f)
  }
}

export default _curryN
