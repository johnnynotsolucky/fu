"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _is = function _is(ctor, x) {
  var isValid = x !== null && x !== undefined;
  return isValid(x) && x.constructor === ctor || x instanceof ctor;
};

exports.default = _is;