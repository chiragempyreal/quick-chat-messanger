"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _EmptyChat = _interopRequireDefault(require("./EmptyChat"));
var _UserChat = _interopRequireDefault(require("./UserChat"));
var _GroupChat = _interopRequireDefault(require("./GroupChat"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Chat History with different Routing
function ChatHistory(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Chats",
    component: _EmptyChat.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Chats/user1",
    component: _UserChat.default,
    exact: true
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/Chats/group1",
    component: _GroupChat.default,
    exact: true
  }));
}
var _default = ChatHistory;
exports.default = _default;