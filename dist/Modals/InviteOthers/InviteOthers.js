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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Invitation modal component
class InviteOthers extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      isPublicGroup: true
    });
    _defineProperty(this, "setModalShow", () => {
      this.props.hideInviteOthers();
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
      show: true,
      scrollable: true,
      onHide: () => this.setModalShow(false),
      centered: true
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, /*#__PURE__*/_react.default.createElement("h5", null, "Invite Others"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, {
      className: "hide-scrollbar"
    }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Email address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      className: "form-control form-control-md",
      id: "inviteEmailAddress",
      placeholder: "Type email address here"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Invitation message"), /*#__PURE__*/_react.default.createElement("textarea", {
      className: "form-control form-control-md no-resize hide-scrollbar",
      id: "inviteMessage",
      placeholder: "Write your message here",
      rows: "3"
    })))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      variant: "link",
      className: "text-muted",
      onClick: () => {
        this.setModalShow(false);
      }
    }, "Close"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
      className: "btn btn-success",
      onClick: () => {
        this.setModalShow(false);
      }
    }, "Send Invitation")));
  }
}
var _default = InviteOthers;
exports.default = _default;