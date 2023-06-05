"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MessageDropdown = _interopRequireDefault(require("../Dropdowns/MessageDropdown"));
var _RenderSearchMessage = _interopRequireDefault(require("./RenderSearchMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TextMessage = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-content"
  }, props.name ? /*#__PURE__*/_react.default.createElement("h6", {
    className: "text-dark"
  }, props.name) : null, /*#__PURE__*/_react.default.createElement(_RenderSearchMessage.default, props))), /*#__PURE__*/_react.default.createElement("div", {
    className: "message-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar avatar-sm"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: props.profile
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "message-date"
  }, props.time), props.isEdited ? /*#__PURE__*/_react.default.createElement("span", {
    className: "message-status"
  }, "Edited") : null, /*#__PURE__*/_react.default.createElement(_MessageDropdown.default, null)));
};
var _default = TextMessage;
exports.default = _default;