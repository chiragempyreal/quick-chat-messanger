"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _calls = require("../../../assets/media/icons/calls.svg");
var _Config = require("../../../Config/Config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Call = props => {
  let profile = "";
  switch (props.profileType) {
    case _Config.ProfileType.Image:
      profile = /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: props.profile,
        alt: ""
      }));
      break;
    case _Config.ProfileType.Svg:
      profile = /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar bg-success text-light"
      }, /*#__PURE__*/_react.default.createElement("span", null, props.profile));
      break;
    case _Config.ProfileType.Text:
      profile = /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar bg-info text-light"
      }, /*#__PURE__*/_react.default.createElement("span", null, "EW"));
      break;
    default:
      break;
  }
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "contacts-item " + (props.active ? "active" : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "#",
    className: "media-link"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-link"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar"
  }, profile), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-info"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "chat-name text-truncate"
  }, props.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-texts"
  }, props.CallTypeIcon, /*#__PURE__*/_react.default.createElement("p", {
    className: (props.filter === _Config.CallFilterOptions.Missedcalls ? "text-danger" : "text-muted") + " mb-0"
  }, props.time))), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-action"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
    type: "button"
  }, /*#__PURE__*/_react.default.createElement(_calls.ReactComponent, {
    className: "hw-20"
  })))));
};
var _default = Call;
exports.default = _default;