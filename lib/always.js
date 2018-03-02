'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lazily2 = require('./internals/_lazily');

var _lazily3 = _interopRequireDefault(_lazily2);

var _identity = require('./identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var always = (0, _lazily3.default)(_identity2.default);
exports.default = always;