"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _lazily = function _lazily(f) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function () {
      return f.apply(undefined, args);
    };
  };
};

exports.default = _lazily;