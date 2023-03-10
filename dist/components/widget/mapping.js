"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _Badge = require("../Badge");

var _DummyBadge = require("../DummyBadge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mapping = {
  'test_wdgt_v0': _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_Badge.Badge, null)),
  'wdgt_badge': _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_DummyBadge.DummyBadge, null))
};
var _default = Mapping;
exports["default"] = _default;