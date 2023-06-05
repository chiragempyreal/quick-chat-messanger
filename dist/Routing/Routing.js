"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _SignIn = _interopRequireDefault(require("../components/SignIn/SignIn"));
var _SignUp = _interopRequireDefault(require("../components/SignUp/SignUp"));
var _ResetPassword = _interopRequireDefault(require("../components/ResetPassword/ResetPassword"));
var _Home = _interopRequireDefault(require("../components/Home/Home"));
var _Chats = _interopRequireDefault(require("../components/Chats/Chats"));
var _Calls = _interopRequireDefault(require("../components/Calls/Calls"));
var _Friends = _interopRequireDefault(require("../components/Friends/Friends"));
var _Account = _interopRequireDefault(require("../components/Account/Account"));
var _Documentation = _interopRequireDefault(require("../components/Documentation/Documentation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Route component to manage app routes
class Routing extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
      basename: "/quickyreact/"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/",
      component: _Home.default,
      exact: true
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/SignIn",
      component: _SignIn.default,
      exact: true
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/SignUp",
      component: _SignUp.default,
      exact: true
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/reset-password",
      component: _ResetPassword.default,
      exact: true
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/Chats",
      component: _Chats.default
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/Calls",
      component: _Calls.default
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/Friends",
      component: _Friends.default
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/Account",
      component: _Account.default
    }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/Documentation",
      component: _Documentation.default
    }));
  }
}
var _default = Routing;
exports.default = _default;