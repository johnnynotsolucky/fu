"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var join = function join(separator) {
  return function (arr) {
    return arr.join(separator);
  };
};

exports.default = join;