'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN2 = require('./internals/_curryN');

var _curryN3 = _interopRequireDefault(_curryN2);

var _memoizeWith2 = require('./internals/_memoizeWith');

var _memoizeWith3 = _interopRequireDefault(_memoizeWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyF = function keyF() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.toString();
};

var memoize = (0, _curryN3.default)(2, [], _memoizeWith3.default)(keyF);
exports.default = memoize;