'use strict';

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('join', function () {
  it('joins an array with a separator', function () {
    var result = (0, _join2.default)(',')([1, 2, 3]);
    expect(result).to.equal('1,2,3');

    result = (0, _join2.default)('|')([1, 2, 3]);
    expect(result).to.equal('1|2|3');
  });

  it('returns an empty string when given an empty array', function () {
    var result = (0, _join2.default)(',')([]);
    expect(result).to.equal('');
  });

  it('falls back to default separator', function () {
    var result = (0, _join2.default)()([1, 2, 3]);
    expect(result).to.equal('1,2,3');
  });
});