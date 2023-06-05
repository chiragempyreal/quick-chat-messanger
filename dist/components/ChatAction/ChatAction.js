"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _CreateGroup = _interopRequireDefault(require("../Modals/CreateGroup/CreateGroup"));
var _InviteOthers = _interopRequireDefault(require("../Modals/InviteOthers/InviteOthers"));
var _Notifications = _interopRequireDefault(require("../Modals/Notifications/Notifications"));
var _StartConversation = _interopRequireDefault(require("../Modals/StartConversation/StartConversation"));
var _notifications = require("../../assets/media/icons/notifications.svg");
var _verticaloptiondots = require("../../assets/media/icons/verticaloptiondots.svg");
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Top  Re-usable Action Component
class ChatAction extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      showNotification: false,
      showNewChat: false,
      showNewGroup: false,
      showInviteOthers: false
    });
    _defineProperty(this, "toggleNotification", () => {
      this.setState({
        showNotification: !this.state.showNotification
      });
    });
    _defineProperty(this, "toggleNewChat", () => {
      this.setState({
        showNewChat: !this.state.showNewChat
      });
    });
    _defineProperty(this, "toggleCreateGroup", () => {
      this.setState({
        showNewGroup: !this.state.showNewGroup
      });
    });
    _defineProperty(this, "toggleInviteOthers", () => {
      this.setState({
        showInviteOthers: !this.state.showInviteOthers
      });
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
      className: "nav flex-nowrap"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item mr-1"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "nav-link text-muted px-1",
      title: "Notifications",
      role: "button",
      "data-toggle": "modal",
      "data-target": "#notificationModal",
      onClick: this.toggleNotification,
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_notifications.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item mr-0"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20 mt-2",
      as: _verticaloptiondots.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "dropdown-menu dropdown-menu-right"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      onClick: this.toggleNewChat,
      to: "#"
    }, "New Chat"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      onClick: this.toggleCreateGroup,
      to: "#"
    }, "Create Group"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      onClick: this.toggleInviteOthers,
      to: "#"
    }, "Invite Others"))))), this.state.showNotification ? /*#__PURE__*/_react.default.createElement(_Notifications.default, {
      hideNotification: this.toggleNotification
    }) : null, this.state.showNewChat ? /*#__PURE__*/_react.default.createElement(_StartConversation.default, {
      hideNewChat: this.toggleNewChat
    }) : null, this.state.showNewGroup ? /*#__PURE__*/_react.default.createElement(_CreateGroup.default, {
      hideNewGroup: this.toggleCreateGroup
    }) : null, this.state.showInviteOthers ? /*#__PURE__*/_react.default.createElement(_InviteOthers.default, {
      hideInviteOthers: this.toggleInviteOthers
    }) : null);
  }
}
var _default = ChatAction;
exports.default = _default;