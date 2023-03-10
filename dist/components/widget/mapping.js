"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("../Badge"));

var _DummyBadge = _interopRequireDefault(require("../DummyBadge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mapping = {
  'test_wdgt_v0': _Badge["default"],
  'wdgt_badge': _DummyBadge["default"]
};
var _default = Mapping;
exports["default"] = _default;