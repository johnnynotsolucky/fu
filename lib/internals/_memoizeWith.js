'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has2 = require('./_has');

var _has3 = _interopRequireDefault(_has2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _memoizeWith = function _memoizeWith(hashF, f) {
  var cache = {};
  return function () {
    var key = hashF.apply(undefined, arguments);
    return (0, _has3.default)(key, cache) ? cache[key] : cache[key] = f.apply(undefined, arguments);
  };
};

exports.default = _memoizeWith;