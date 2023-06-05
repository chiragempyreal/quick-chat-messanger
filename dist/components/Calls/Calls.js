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
var _NavBar = _interopRequireDefault(require("../NavBar/NavBar"));
var _CallList = _interopRequireDefault(require("./CallList/CallList"));
var _CallHistory = _interopRequireDefault(require("./CallHistory/CallHistory"));
var _Config = require("../../Config/Config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Calls  Component to display call details
class Calls extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      themeColor: Boolean(localStorage.getItem("theme")) ? parseInt(localStorage.getItem("theme")) : _Config.ThemeColor.Light,
      mainVisible: false,
      isRTL: Boolean(localStorage.getItem("rtl"))
    });
    _defineProperty(this, "handleMainVisible", () => {
      this.setState({
        mainVisible: true
      });
    });
    _defineProperty(this, "handleHideMain", () => {
      this.setState({
        mainVisible: false
      });
    });
  }
  // Set theme when component load
  componentDidMount() {
    let classList = document.body.classList;
    if (classList.length === 0 && this.state.themeColor === _Config.ThemeColor.Dark) {
      document.body.classList.add("dark-skin");
    } else if (classList.length && this.state.themeColor === _Config.ThemeColor.Light) {
      document.body.classList.remove("dark-skin");
    }
    if (this.state.isRTL) document.body.setAttribute("dir", "rtl");else document.body.removeAttribute("dir");
  }
  // Load Call master component
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "chats-tab-open h-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "main-layout h-100"
    }, /*#__PURE__*/_react.default.createElement(_NavBar.default, {
      activeMenu: "calls"
    }), /*#__PURE__*/_react.default.createElement(_CallList.default, {
      setMainVisible: this.handleMainVisible
    }), /*#__PURE__*/_react.default.createElement(_CallHistory.default, {
      showMain: this.state.mainVisible,
      hideMain: this.handleHideMain
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "backdrop"
    })));
  }
}
var _default = Calls;
exports.default = _default;