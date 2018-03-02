'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curryN2 = require('./internals/_curryN');

var _curryN3 = _interopRequireDefault(_curryN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var curry = function curry(f) {
  return (0, _curryN3.default)(f.length, [], f);
};
exports.default = curry;