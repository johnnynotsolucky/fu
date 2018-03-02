"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var not = function not(y) {
  return function (x) {
    return x !== y;
  };
};

exports.default = not;