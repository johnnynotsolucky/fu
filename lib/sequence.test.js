'use strict';

var _sequence = require('./sequence');

var _sequence2 = _interopRequireDefault(_sequence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('sequence', function () {
  it('accepts an initial function with an arity more than 1', function () {
    var stubbed = sinon.stub();
    (0, _sequence2.default)(stubbed)(1, 2, 3, 4);
    expect(stubbed).to.have.been.calledWithExactly(1, 2, 3, 4);
  });

  it('does something', function () {
    var stubbed = sinon.stub().withArgs(10, 2).returns(20).withArgs(20).returns(30).withArgs(30).returns(1);

    var f = (0, _sequence2.default)(stubbed, stubbed, stubbed);
    expect(f(10, 2)).to.equal(1);
  });
});