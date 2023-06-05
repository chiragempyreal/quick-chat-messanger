"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _MessageDropdown = _interopRequireDefault(require("../Dropdowns/MessageDropdown"));
var _chatdocmessage = require("../../../../assets/media/icons/chatdocmessage.svg");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DocMessage = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
  }, /*#__PURE__*/_react.default.createElement(_chatdocmessage.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "document-body"
  }, /*#__PURE__*/_react.default.createElement("h6", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "#",
    className: "text-reset",
    title: "global-warming-data-2020.xlxs"
  }, props.message)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-inline small mb-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-muted"
  }, props.size)), /*#__PURE__*/_react.default.createElement("li", {
    className: "list-inline-item"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-muted text-uppercase"
  }, props.extension))))))), /*#__PURE__*/_react.default.createElement("div", {
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
var _default = DocMessage;
exports.default = _default;