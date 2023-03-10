"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = require("../Badge");

var _DummyBadge = require("../DummyBadge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const Mapping = {
//     'test_wdgt_v0': <Badge />,
//     'wdgt_badge': <DummyBadge />
//   };
var Mapping = function Mapping(path) {
  switch (path) {
    case 'test_wdgt_v0':
      return _Badge.Badge;
      break;

    case 'wdgt_badge':
      return _DummyBadge.DummyBadge;
      break;

    default:
      return _Badge.Badge;
  }
};

var _default = Mapping;
exports["default"] = _default;