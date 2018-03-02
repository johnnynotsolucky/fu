const _lazily = f => (...args) => () => f(...args)

module.exports = _lazily
