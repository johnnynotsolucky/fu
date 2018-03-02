'use strict';

var _notEquals = require('./notEquals');

var _notEquals2 = _interopRequireDefault(_notEquals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('notEquals', function () {
  it('evaluates to true for different arguments', function () {
    expect((0, _notEquals2.default)(10)(9)).to.be.true;
    expect((0, _notEquals2.default)({})({})).to.be.true;
    expect((0, _notEquals2.default)([])([])).to.be.true;
    expect((0, _notEquals2.default)('1')(1)).to.be.true;
  });

  it('evaluates to false for same arguments', function () {
    expect((0, _notEquals2.default)(10)(10)).to.be.false;
    var o = {};
    expect((0, _notEquals2.default)(o)(o)).to.be.false;
    var arr = [];
    expect((0, _notEquals2.default)(arr)(arr)).to.be.false;
  });
});