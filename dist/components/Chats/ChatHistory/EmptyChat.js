"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _ = _interopRequireDefault(require("../../../assets/media/avatar/4.png"));
var _StartConversation = _interopRequireDefault(require("../../Modals/StartConversation/StartConversation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Render when No chat history
class EmptyChat extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      showNewChat: false
    });
    _defineProperty(this, "toggleNewChat", () => {
      this.setState({
        showNewChat: !this.state.showNewChat
      });
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.state.showNewChat ? /*#__PURE__*/_react.default.createElement(_StartConversation.default, {
      hideNewChat: this.toggleNewChat
    }) : null, /*#__PURE__*/_react.default.createElement("main", {
      className: "main"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chats"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column justify-content-center text-center h-100 w-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-lg mb-2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "avatar-img",
      src: _.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("h5", null, "Welcome, Christina!"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted"
    }, "Please select a chat to start messaging."), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-primary no-box-shadow",
      type: "button",
      "data-toggle": "modal",
      "data-target": "#startConversation",
      onClick: this.toggleNewChat
    }, "Start a conversation"))))));
  }
}
var _default = EmptyChat;
exports.default = _default;