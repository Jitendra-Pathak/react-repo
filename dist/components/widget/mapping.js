"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = require("../Badge");

var _DummyBadge = require("../DummyBadge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ReactDOMServer from 'react-dom/server'
var Mapping = {
  'test_wdgt_v0': /*#__PURE__*/_react["default"].createElement(_Badge.Badge, null),
  'wdgt_badge': /*#__PURE__*/_react["default"].createElement(_DummyBadge.DummyBadge, null)
}; // const Mapping = {
//     'test_wdgt_v0':  ReactDOMServer.renderToString(<Badge />),
//     'wdgt_badge':  ReactDOMServer.renderToString(<DummyBadge />),
// };

var _default = Mapping;
exports["default"] = _default;