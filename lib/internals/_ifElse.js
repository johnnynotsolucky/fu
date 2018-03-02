"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ifElse = function _ifElse(condition, whenTrue, whenFalse) {
  return function () {
    return condition.apply(undefined, arguments) ? whenTrue.apply(undefined, arguments) : whenFalse.apply(undefined, arguments);
  };
};

exports.default = _ifElse;