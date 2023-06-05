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
var _reactRouterDom = require("react-router-dom");
var _ = _interopRequireDefault(require("../../../assets/media/avatar/1.png"));
var _2 = _interopRequireDefault(require("../../../assets/media/avatar/2.png"));
var _3 = _interopRequireDefault(require("../../../assets/media/avatar/3.png"));
var _4 = _interopRequireDefault(require("../../../assets/media/avatar/4.png"));
var _5 = _interopRequireDefault(require("../../../assets/media/avatar/5.png"));
var _search = require("../../../assets/media/icons/search.svg");
var _reactFlagsSelect = _interopRequireDefault(require("react-flags-select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Start a conversion
class StartConversation extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      code: ""
    });
    _defineProperty(this, "setModalShow", () => {
      this.props.hideNewChat();
    });
    _defineProperty(this, "setCountry", () => {});
    _defineProperty(this, "setSelected", data => {
      console.log("Result", data);
      this.setState({
        code: data
      });
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
      show: true,
      scrollable: true,
      onHide: this.setModalShow,
      centered: true
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
      closeButton: true
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, /*#__PURE__*/_react.default.createElement("h5", null, "New Chat"))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, {
      className: "p-0 hide-scrollbar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container border-bottom p-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-row "
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-5"
    }, /*#__PURE__*/_react.default.createElement("form", {
      className: ""
    }, /*#__PURE__*/_react.default.createElement(_reactFlagsSelect.default, {
      selected: this.state.code,
      onSelect: code => this.setSelected(code),
      className: "menu-flags",
      countries: ["US", "GB"],
      customLabels: {
        GB: {
          primary: "GB",
          secondary: "+44"
        },
        US: {
          primary: "US",
          secondary: "+1"
        }
      }
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-auto flex-fill"
    }, /*#__PURE__*/_react.default.createElement("form", {
      className: ""
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group w-100 bg-light"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md search transparent-bg",
      placeholder: "Phone number"
    })))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("form", {
      className: "form-inline w-100 p-2 border-bottom"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group w-100 bg-light"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md search border-right-0 transparent-bg pr-0",
      placeholder: "Search..."
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-append"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-text transparent-bg border-left-0",
      role: "button"
    }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-online mr-2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _.default,
      alt: "avatar1"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "text-reset",
      to: "#"
    }, "Catherine Richardson")), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Online")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-online mr-2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _2.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset"
    }, "Katherine Schneider")), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Online")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-offline mr-2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _3.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset"
    }, "Brittany K. Williams")), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Offline")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-busy mr-2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _4.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset"
    }, "Christina Turner")), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Busy")))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-away mr-2"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _5.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset"
    }, "Annie Richardson")), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Away")))))))));
  }
}
var _default = StartConversation;
exports.default = _default;