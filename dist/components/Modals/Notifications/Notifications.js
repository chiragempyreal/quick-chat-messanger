"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));
var _addcontact = require("../../../assets/media/icons/addcontact.svg");
var _checkCircle = require("../../../assets/media/heroicons/outline/check-circle.svg");
var _photograph = require("../../../assets/media/heroicons/outline/photograph.svg");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Notification list component
class Notifications extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "setModalShow", () => {
      this.props.hideNotification();
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_Modal.default, {
      show: true,
      scrollable: true,
      onHide: () => this.setModalShow(false)
    }, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, {
      closeButton: true
    }, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, null, /*#__PURE__*/_react.default.createElement("h5", null, "Notifications"))), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, {
      className: "p-0 hide-scrollbar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush  py-2"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_addcontact.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, "Catherine richardson"), " send you a friend request"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "5 mins ago"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-center mt-2"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-outline-danger mx-1"
    }, "Reject"), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-primary mx-1"
    }, "Accept"))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_checkCircle.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, "Katelyn Valdez"), " accepted your friend request"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "25 mins ago")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_photograph.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, "Eva Walker"), " updated profile picture"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "5 mins ago")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_checkCircle.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, "Bonnie Torres"), " accepted your friend request"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "5 mins ago")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_photograph.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, "Christopher Garcia"), " updated profile picture"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "5 mins ago")))))))), /*#__PURE__*/_react.default.createElement(_Modal.default.Footer, {
      className: "justify-content-center"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      variant: "link",
      className: "text-muted",
      onClick: () => this.setModalShow(false)
    }, "Clear all")));
  }
}
var _default = Notifications;
exports.default = _default;