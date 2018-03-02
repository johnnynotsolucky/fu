import notEquals from './notEquals'

describe('notEquals', () => {
  it('evaluates to true for different arguments', () => {
    expect(notEquals(10)(9)).to.be.true
    expect(notEquals({})({})).to.be.true
    expect(notEquals([])([])).to.be.true
    expect(notEquals('1')(1)).to.be.true
  })

  it('evaluates to false for same arguments', () => {
    expect(notEquals(10)(10)).to.be.false
    const o = {}
    expect(notEquals(o)(o)).to.be.false
    const arr = []
    expect(notEquals(arr)(arr)).to.be.false
  })
})
