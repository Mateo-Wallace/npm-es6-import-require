"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myFunction = void 0;
// Your code here
var myFunction = exports.myFunction = function myFunction() {
  console.log("Hello, world!");
};

// For CommonJS compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    myFunction: myFunction
  };
}