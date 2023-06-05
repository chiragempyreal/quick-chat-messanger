"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _ = _interopRequireDefault(require("../../../assets/media/avatar/2.png"));
var _verticaloptiondots = require("../../../assets/media/icons/verticaloptiondots.svg");
var _backtolist = require("../../../assets/media/icons/backtolist.svg");
var _callnow = require("../../../assets/media/icons/callnow.svg");
var _phoneOutgoing = require("../../../assets/media/heroicons/solid/phone-outgoing.svg");
var _phoneIncoming = require("../../../assets/media/heroicons/solid/phone-incoming.svg");
var _reactBootstrap = require("react-bootstrap");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Child Component of Calls
class CallHistory extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "hideMainVisible", () => {
      this.setState({
        toggleChatOption: false
      });
      this.props.hideMain();
    });
  }
  // Load chat history for user
  render() {
    return /*#__PURE__*/_react.default.createElement("main", {
      className: "main " + (this.props.showMain === true ? "main-visible" : "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "calls px-0 py-2 p-xl-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container-xl"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card card-bg-1 mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-lg mb-3"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "avatar-img",
      src: _.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column align-items-center"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "mb-1"
    }, "Catherine Richardson"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-white rounded px-2 bg-primary"
    }, "+01-202-265462")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-options"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20 mt-2",
      as: _verticaloptiondots.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "dropdown-menu dropdown-menu-right"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, "Clear Call Log"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, "Block")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-closer d-xl-none"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      onClick: this.hideMainVisible
    }, /*#__PURE__*/_react.default.createElement(_backtolist.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "row calls-log"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-primary mr-2"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
      className: "hw-24"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, "Incoming Call"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row align-items-sm-center align-items-start"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Just now"), /*#__PURE__*/_react.default.createElement("span", {
      className: "d-none d-sm-block text-muted mx-2"
    }, "\u2022"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "2m 35s"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-options ml-1 d-none d-sm-block"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-primary mr-2"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_phoneOutgoing.ReactComponent, {
      className: "hw-24"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, "Outgoing Call"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row align-items-sm-center align-items-start"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "5 mins ago"), /*#__PURE__*/_react.default.createElement("span", {
      className: "d-none d-sm-block text-muted mx-2"
    }, "\u2022"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "12m 25s"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-options ml-1 d-none d-sm-block"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-primary mr-2"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
      className: "hw-24"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-danger"
    }, "Missed Call"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row align-items-sm-center align-items-start"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "18 mins ago"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-options ml-1 d-none d-sm-block"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-primary mr-2"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_phoneOutgoing.ReactComponent, {
      className: "hw-24"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, "Outgoing Call"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row align-items-sm-center align-items-start"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Yesterday at 10:45PM"), /*#__PURE__*/_react.default.createElement("span", {
      className: "d-none d-sm-block text-muted mx-2"
    }, "\u2022"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "25m 18s"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-options ml-1 d-none d-sm-block"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-primary mr-2"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
      className: "hw-24"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, "Incoming Call"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row align-items-sm-center align-items-start"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "16/05/2020 at 11:49AM"), /*#__PURE__*/_react.default.createElement("span", {
      className: "d-none d-sm-block text-muted mx-2"
    }, "\u2022"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "0m 56s"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-options ml-1 d-none d-sm-block"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-primary mr-2"
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
      className: "hw-24"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", null, "Incoming Call"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row align-items-sm-center align-items-start"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "14/05/2020 at 11:49AM"), /*#__PURE__*/_react.default.createElement("span", {
      className: "d-none d-sm-block text-muted mx-2"
    }, "\u2022"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "24m 19s"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-options ml-1 d-none d-sm-block"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null)))))))))));
  }
}
var _default = CallHistory;
exports.default = _default;