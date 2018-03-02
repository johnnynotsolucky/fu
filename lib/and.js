"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var and = function and(a) {
  return function (b) {
    return a === true && b === true;
  };
};

exports.default = and;