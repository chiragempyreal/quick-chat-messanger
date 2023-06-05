"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Config = require("../../../../Config/Config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ChatMessage = props => {
  let profile = "";
  let status = null;
  switch (props.status) {
    case _Config.UserStatus.Online:
      status = "avatar-online";
      break;
    case _Config.UserStatus.Offline:
      status = "avatar-offline";
      break;
    case _Config.UserStatus.Busy:
      status = "avatar-busy";
      break;
    case _Config.UserStatus.Away:
      status = "avatar-away";
      break;
    default:
      break;
  }
  switch (props.profileType) {
    case _Config.ProfileType.Image:
      profile = /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar avatar-instagram "
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: props.profile,
        alt: ""
      }));
      break;
    case _Config.ProfileType.Svg:
      profile = /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar avatar-instagram bg-success text-light"
      }, /*#__PURE__*/_react.default.createElement("span", null, props.profile));
      break;
    case _Config.ProfileType.Text:
      profile = /*#__PURE__*/_react.default.createElement("div", {
        className: "avatar avatar-instagram bg-info text-light "
      }, /*#__PURE__*/_react.default.createElement("span", null, "EW"));
      break;
    default:
      break;
  }
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "contacts-item friends " + (props.ChatUserId && window.location.href.search(props.ChatUserId) > 0 ? "active " : " ") + (props.badge ? "unread" : "")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "contacts-link",
    to: props.to,
    onClick: props.handleChatClick
  }, profile, /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-info"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "chat-name text-truncate"
  }, props.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "chat-time"
  }, props.time)), /*#__PURE__*/_react.default.createElement("div", {
    className: "contacts-texts"
  }, props.MessageSvg ? props.MessageSvg : null, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-truncate"
  }, props.message), props.endIcon ? /*#__PURE__*/_react.default.createElement("div", {
    className: "d-inline-flex align-items-center ml-1"
  }, props.endIcon) : null, props.badge ? /*#__PURE__*/_react.default.createElement("div", {
    className: "badge badge-rounded badge-primary ml-1"
  }, props.badge) : null, /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-danger ml-1"
  }, "Active")))));
};
var _default = ChatMessage;
exports.default = _default;