"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiComp", {
  enumerable: true,
  get: function get() {
    return _apiComponent["default"];
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function get() {
    return _Badge["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "DummyBadge", {
  enumerable: true,
  get: function get() {
    return _DummyBadge["default"];
  }
});
exports.MapComp = void 0;
Object.defineProperty(exports, "Mapping", {
  enumerable: true,
  get: function get() {
    return _mapping["default"];
  }
});

var _Badge = _interopRequireDefault(require("./components/Badge"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _apiComponent = _interopRequireDefault(require("./components/apiComponent"));

var _DummyBadge = _interopRequireDefault(require("./components/DummyBadge"));

var _mapping = _interopRequireDefault(require("./components/widget/mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MapComp = {
  'test_wdgt_v0': _Badge["default"],
  'wdgt_badge': _DummyBadge["default"]
};
exports.MapComp = MapComp;