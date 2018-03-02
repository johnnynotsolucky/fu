'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequence2 = require('./internals/_sequence');

var _sequence3 = _interopRequireDefault(_sequence2);

var _reverse = require('./reverse');

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compose = function compose() {
  return (0, _sequence3.default)(_reverse2.default.apply(undefined, arguments));
};
exports.default = compose;