"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactRouterDom = require("react-router-dom");
var _horizontaloptiondots = require("../../../../assets/media/icons/horizontaloptiondots.svg");
var _copy = require("../../../../assets/media/icons/copy.svg");
var _reply = require("../../../../assets/media/icons/reply.svg");
var _forward = require("../../../../assets/media/icons/forward.svg");
var _favourite = require("../../../../assets/media/icons/favourite.svg");
var _delete = require("../../../../assets/media/icons/delete.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageDropdown = () => {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
    className: "text-muted hw-20",
    as: _horizontaloptiondots.ReactComponent
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
    className: "dropdown-menu"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item d-flex align-items-center",
    to: "#"
  }, /*#__PURE__*/_react.default.createElement(_copy.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Copy")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item d-flex align-items-center",
    to: "#"
  }, /*#__PURE__*/_react.default.createElement(_reply.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Replay")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item d-flex align-items-center",
    to: "#"
  }, /*#__PURE__*/_react.default.createElement(_forward.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Forward")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item d-flex align-items-center",
    to: "#"
  }, /*#__PURE__*/_react.default.createElement(_favourite.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Favourite")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item d-flex align-items-center text-danger",
    to: "#"
  }, /*#__PURE__*/_react.default.createElement(_delete.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Delete"))));
};
var _default = MessageDropdown;
exports.default = _default;