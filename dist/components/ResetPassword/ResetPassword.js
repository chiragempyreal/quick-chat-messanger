"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Config = require("../../Config/Config");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Reset password component
class ResetPassword extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      themeColor: Boolean(localStorage.getItem("theme")) ? parseInt(localStorage.getItem("theme")) : _Config.ThemeColor.Light,
      isRTL: Boolean(localStorage.getItem("rtl"))
    });
  }
  componentDidMount() {
    let classList = document.body.classList;
    if (classList.length === 0 && this.state.themeColor === _Config.ThemeColor.Dark) {
      document.body.classList.add("dark-skin");
    } else if (classList.length && this.state.themeColor === _Config.ThemeColor.Light) {
      document.body.classList.remove("dark-skin");
    }
    if (this.state.isRTL) document.body.setAttribute("dir", "rtl");else document.body.removeAttribute("dir");
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "main-layout card-bg-1"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container d-flex flex-column"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row no-gutters text-center align-items-center justify-content-center min-vh-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12 col-md-6 col-lg-5 col-xl-4"
    }, /*#__PURE__*/_react.default.createElement("h1", {
      className: "font-weight-bold"
    }, "Password Reset"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-dark mb-3"
    }, "Enter your email address to reset password."), /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", {
      className: "sr-only"
    }, "Email Address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      className: "form-control form-control-md",
      placeholder: "Enter your email"
    })), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-lg btn-block btn-primary text-uppercase font-weight-semibold mb-3"
    }, "Send Reset Link"), /*#__PURE__*/_react.default.createElement("p", null, "Already have an account?", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "font-weight-semibold",
      to: "/SignIn"
    }, "Sign in"), ".")))));
  }
}
var _default = ResetPassword;
exports.default = _default;