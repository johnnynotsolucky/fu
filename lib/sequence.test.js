const sequence = require('./sequence')

describe('sequence', () => {
  it('accepts an initial function with an arity more than 1', () => {
    const stubbed = sinon.stub()
    sequence(stubbed)(1, 2, 3, 4)
    expect(stubbed).to.have.been.calledWithExactly(1, 2, 3, 4)
  })

  it('does something', () => {
    const stubbed = sinon
      .stub()
      .withArgs(10, 2)
      .returns(20)
      .withArgs(20)
      .returns(30)
      .withArgs(30)
      .returns(1)

    const f = sequence(stubbed, stubbed, stubbed)
    expect(f(10, 2)).to.equal(1)
  })
})
