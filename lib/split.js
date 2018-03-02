"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var split = function split(separator) {
  return function (str) {
    return str.split(separator);
  };
};

exports.default = split;