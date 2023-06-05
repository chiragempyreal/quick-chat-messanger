"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _appicon = require("../../assets/media/icons/appicon.svg");
var _chats = require("../../assets/media/icons/chats.svg");
var _calls = require("../../assets/media/icons/calls.svg");
var _friends = require("../../assets/media/icons/friends.svg");
var _accounts = require("../../assets/media/icons/accounts.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NavBar(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navigation navbar navbar-light bg-primary"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "d-none d-xl-block bg-light rounded p-1",
    to: "/"
  }, /*#__PURE__*/_react.default.createElement(_appicon.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center",
    id: "mainNavTab",
    role: "tablist"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link p-0 py-xl-3 " + (props.activeMenu === "chat" ? "active" : ""),
    id: "chats-tab",
    to: "/Chats",
    title: "Chats"
  }, /*#__PURE__*/_react.default.createElement(_chats.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link p-0 py-xl-3 " + (props.activeMenu === "calls" ? "active" : ""),
    id: "calls-tab",
    to: "/Calls",
    title: "Calls"
  }, /*#__PURE__*/_react.default.createElement(_calls.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link p-0 py-xl-3 " + (props.activeMenu === "friends" ? "active" : ""),
    id: "friends-tab",
    to: "/Friends",
    title: "Friends"
  }, /*#__PURE__*/_react.default.createElement(_friends.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link p-0 py-xl-3 " + (props.activeMenu === "account" ? "active" : ""),
    id: "profile-tab",
    to: "/Account",
    title: "Account"
  }, /*#__PURE__*/_react.default.createElement(_accounts.ReactComponent, null)))));
}
var _default = NavBar;
exports.default = _default;