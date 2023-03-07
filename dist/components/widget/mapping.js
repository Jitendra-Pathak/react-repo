"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = require("../Badge");

var _DummyBadge = require("../DummyBadge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mapping = {
  'test_wdgt_v0': _Badge.Badge,
  'wdgt_badge': _DummyBadge.DummyBadge
};
var _default = Mapping;
exports["default"] = _default;