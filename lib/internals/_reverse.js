'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sequence2 = require('./_sequence');

var _sequence3 = _interopRequireDefault(_sequence2);

var _is2 = require('./_is');

var _is3 = _interopRequireDefault(_is2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _reverse = function _reverse(x) {
    return (0, _is3.default)(String, x) ? x.split('').reverse().join('') : arr.reverse();
};

exports.default = _reverse;