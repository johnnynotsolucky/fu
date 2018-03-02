const join = require('./join')

describe('join', () => {
  it('joins an array with a separator', () => {
    let result = join(',')([1, 2, 3])
    expect(result).to.equal('1,2,3')

    result = join('|')([1, 2, 3])
    expect(result).to.equal('1|2|3')
  })

  it('returns an empty string when given an empty array', () => {
    const result = join(',')([])
    expect(result).to.equal('')
  })

  it('falls back to default separator', () => {
    const result = join()([1, 2, 3])
    expect(result).to.equal('1,2,3')
  })
})
