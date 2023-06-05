"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _ = _interopRequireDefault(require("../../../assets/media/avatar/3.png"));
var _logout = require("../../../assets/media/heroicons/outline/logout.svg");
var _cog = require("../../../assets/media/heroicons/outline/cog.svg");
var _verticaloptiondots = require("../../../assets/media/icons/verticaloptiondots.svg");
var _clock = require("../../../assets/media/heroicons/outline/clock.svg");
var _calendar = require("../../../assets/media/heroicons/outline/calendar.svg");
var _calls = require("../../../assets/media/icons/calls.svg");
var _mail = require("../../../assets/media/heroicons/outline/mail.svg");
var _globe = require("../../../assets/media/heroicons/outline/globe.svg");
var _home = require("../../../assets/media/heroicons/outline/home.svg");
var _facebook = require("../../../assets/media/icons/facebook.svg");
var _twitter = require("../../../assets/media/icons/twitter.svg");
var _instagram = require("../../../assets/media/icons/instagram.svg");
var _linkedin = require("../../../assets/media/icons/linkedin.svg");
var _reactBootstrap = require("react-bootstrap");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Child component of Account Details
class Profile extends _react.Component {
  constructor() {
    super(...arguments);
    // to manage view in mobile
    _defineProperty(this, "setVisible", () => {
      this.props.setMainVisible();
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("aside", {
      className: "sidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-pane active",
      id: "profile-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column h-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "hide-scrollbar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-header sticky-top p-2 mb-3"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "font-weight-semibold"
    }, "Profile"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Personal Information & Settings")), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-xl"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card card-body card-bg-5"
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
    }, /*#__PURE__*/_react.default.createElement("h5", null, "Catherine Richardson")), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "btn btn-outline-default mx-1",
      to: "/"
    }, /*#__PURE__*/_react.default.createElement(_logout.ReactComponent, {
      className: "hw-18 d-none d-sm-inline-block"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Logout")), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-outline-default mx-1 d-xl-none",
      type: "button",
      onClick: this.setVisible
    }, /*#__PURE__*/_react.default.createElement(_cog.ReactComponent, {
      className: "hw-18 d-none d-sm-inline-block"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Settings")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-options"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20 mt-2",
      as: _verticaloptiondots.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "dropdown-menu dropdown-menu-right"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, "Change Profile Picture"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, "Change Number"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card mt-3"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Local Time"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "10:25 PM")), /*#__PURE__*/_react.default.createElement(_clock.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Birthdate"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "20/11/1992")), /*#__PURE__*/_react.default.createElement(_calendar.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Phone"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "+01-222-364522")), /*#__PURE__*/_react.default.createElement(_calls.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Email"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "catherine.richardson@gmail.com")), /*#__PURE__*/_react.default.createElement(_mail.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Website"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "www.catherichardson.com")), /*#__PURE__*/_react.default.createElement(_globe.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item pt-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Address"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "1134 Ridder Park Road, San Fransisco, CA 94851")), /*#__PURE__*/_react.default.createElement(_home.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card my-3"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Facebook"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "font-size-sm font-weight-medium",
      to: "#"
    }, "@cathe.richardson")), /*#__PURE__*/_react.default.createElement(_facebook.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Twitter"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "font-size-sm font-weight-medium",
      to: "#"
    }, "@cathe.richardson")), /*#__PURE__*/_react.default.createElement(_twitter.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Instagram"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "font-size-sm font-weight-medium",
      to: "#"
    }, "@cathe.richardson")), /*#__PURE__*/_react.default.createElement(_instagram.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Linkedin"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "font-size-sm font-weight-medium",
      to: "#"
    }, "@cathe.richardson")), /*#__PURE__*/_react.default.createElement(_linkedin.ReactComponent, {
      className: "text-muted hw-20 ml-1"
    })))))))))))));
  }
}
var _default = Profile;
exports.default = _default;