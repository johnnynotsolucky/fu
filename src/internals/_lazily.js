const _lazily = f => (...args) => () => f(...args)

export default _lazily
