"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ = _interopRequireDefault(require("../../../assets/media/avatar/3.png"));
var _locationMarker = require("../../../assets/media/heroicons/solid/location-marker.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Friend = props => {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "contacts-item " + (props.active ? "active" : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "#",
    className: "contacts-link"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-info"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "chat-name text-truncate"
  }, props.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-texts"
  }, /*#__PURE__*/_react.default.createElement(_locationMarker.ReactComponent, {
    className: "hw-16 text-muted mr-1"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-muted mb-0"
  }, props.location)))));
};
var _default = Friend;
exports.default = _default;