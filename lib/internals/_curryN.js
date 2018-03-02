"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _curryN = function _curryN(n, applied, f) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var combined = [].concat(_toConsumableArray(applied), _toConsumableArray(args || []));
    return combined.length >= n ? f.apply(undefined, _toConsumableArray(combined)) : _curryN(n, combined, f);
  };
};

exports.default = _curryN;