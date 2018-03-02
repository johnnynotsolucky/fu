'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lazily2 = require('./_lazily');

var _lazily3 = _interopRequireDefault(_lazily2);

var _equals2 = require('./_equals');

var _equals3 = _interopRequireDefault(_equals2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _sequence = function _sequence() {
  for (var _len = arguments.length, operations = Array(_len), _key = 0; _key < _len; _key++) {
    operations[_key] = arguments[_key];
  }

  var lazyEqualsZero = (0, _lazily3.default)((0, _equals3.default)(0));
  var apply = function apply(result, operation, index) {
    return index === 0 ? operation.apply(undefined, _toConsumableArray(result)) : operation(result);
  };
  return function () {
    for (var _len2 = arguments.length, o = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      o[_key2] = arguments[_key2];
    }

    return operations.reduce(apply, o);
  };
};

exports.default = _sequence;