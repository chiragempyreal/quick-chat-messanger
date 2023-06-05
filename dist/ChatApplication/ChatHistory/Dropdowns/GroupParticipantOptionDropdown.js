"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _reactRouterDom = require("react-router-dom");
var _verticaloptiondots = require("../../../../assets/media/icons/verticaloptiondots.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const GroupParticipantOptionDropdown = () => {
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
    className: "text-muted hw-20",
    as: _verticaloptiondots.ReactComponent
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item",
    to: "#"
  }, "Make admin"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item",
    to: "#"
  }, "Remove from group"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "dropdown-item text-red",
    to: "#"
  }, "Block")));
};
var _default = GroupParticipantOptionDropdown;
exports.default = _default;