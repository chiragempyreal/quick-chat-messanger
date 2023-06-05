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
var _reactSwitch = _interopRequireDefault(require("react-switch"));
var _backtolist = require("../../../assets/media/icons/backtolist.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Settings extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      enableTwoFactor: false,
      readReceipt: false,
      unrecognisedLogins: false
    });
    _defineProperty(this, "handleTwoFactorChange", () => {
      this.setState({
        enableTwoFactor: !this.state.enableTwoFactor
      });
    });
    _defineProperty(this, "handleReadReceipt", () => {
      this.setState({
        readReceipt: !this.state.readReceipt
      });
    });
    _defineProperty(this, "handleUnrecognisedLogins", () => {
      this.setState({
        unrecognisedLogins: !this.state.unrecognisedLogins
      });
    });
    _defineProperty(this, "hideMainVisible", () => {
      this.props.hideMain();
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("main", {
      className: "main " + (this.props.showMain === true ? "main-visible" : "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "profile flex-column"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "page-main-heading sticky-top py-2 px-3 mb-3"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none",
      type: "button",
      onClick: this.hideMainVisible
    }, /*#__PURE__*/_react.default.createElement(_backtolist.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "pl-2 pl-xl-0"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "font-weight-semibold"
    }, "Settings"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Update Personal Information & Settings"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "container-xl px-2 px-sm-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-header"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-1"
    }, "Account"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0 text-muted small"
    }, "Update personal & contact information")), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "First Name"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "firstName",
      placeholder: "Type your first name"
      // value="Catherine"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Last Name"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "lastName",
      placeholder: "Type your last name"
      // value="Richardson"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Mobile number"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "mobileNumber",
      placeholder: "Type your mobile number"
      //value="+01-222-364522"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Birth date"), /*#__PURE__*/_react.default.createElement("input", {
      type: "date",
      className: "form-control form-control-md",
      id: "birthDate",
      placeholder: "dd/mm/yyyy"
      // value="20/11/1992"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Email address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "email",
      className: "form-control form-control-md",
      id: "emailAddress",
      placeholder: "Type your email address"
      // value="catherine.richardson@gmail.com"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Website"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "webSite",
      placeholder: "Type your website"
      //value="www.catherichardson.com"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Address"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "Address",
      placeholder: "Type your address"
      //value="1134 Ridder Park Road, San Fransisco, CA 94851"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-footer d-flex justify-content-end"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-link text-muted mx-1"
    }, "Reset"), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, "Save Changes"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-header"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-1"
    }, "Social network profiles"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0 text-muted small"
    }, "Update personal & contact information")), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Facebook"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "facebookId",
      placeholder: "Username"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Twitter"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "twitterId",
      placeholder: "Username"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Instagram"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "instagramId",
      placeholder: "Username"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Linkedin"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md",
      id: "linkedinId",
      placeholder: "Username"
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-footer d-flex justify-content-end"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-link text-muted mx-1"
    }, "Reset"), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, "Save Changes"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-header"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-1"
    }, "Password"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0 text-muted small"
    }, "Update personal & contact information")), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Current Password"), /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      className: "form-control form-control-md",
      id: "current-password",
      placeholder: "Current password",
      autoComplete: "on"
    })))), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "New Password"), /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      className: "form-control form-control-md",
      id: "new-password",
      placeholder: "New password",
      autoComplete: "on"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6 col-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/_react.default.createElement("label", null, "Repeat Password"), /*#__PURE__*/_react.default.createElement("input", {
      type: "password",
      className: "form-control form-control-md",
      id: "repeat-password",
      placeholder: "Repeat password",
      autoComplete: "on"
    })))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-footer d-flex justify-content-end"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-link text-muted mx-1"
    }, "Reset"), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, "Save Changes"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-header"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-1"
    }, "Privacy"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0 text-muted small"
    }, "Update personal & contact information")), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body p-0"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush list-group-sm-column"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Profile Picture"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Select who can see my profile picture")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
      className: "mr-2"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "btn dropdown-toggle border",
      variant: "light"
    }, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Friends"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Selected Friends"))))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Last Seen"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Select who can see my last seen")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
      className: "mr-2"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "btn dropdown-toggle border",
      variant: "light"
    }, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Friends"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Selected Friends"))))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Groups"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Select who can add you in groups")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
      className: "mr-2"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "btn dropdown-toggle border",
      variant: "light"
    }, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Friends"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Selected Friends"))))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Status"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Select who can see my status updates")), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
      className: "mr-2"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "btn dropdown-toggle border",
      variant: "light"
    }, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Public"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Friends"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, null, "Selected Friends"))))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Read receipts"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "If turn off this option you won't be able to see read recipts")), /*#__PURE__*/_react.default.createElement(_reactSwitch.default, {
      className: "mr-2",
      uncheckedIcon: false,
      height: 20,
      width: 40,
      onChange: this.handleReadReceipt,
      checked: this.state.readReceipt
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-footer d-flex justify-content-end"
    }, /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-link text-muted mx-1"
    }, "Reset"), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "btn btn-primary"
    }, "Save Changes"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-header"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-1"
    }, "Security"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0 text-muted small"
    }, "Update personal & contact information")), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body p-0"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush list-group-sm-column"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Use two-factor authentication"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Ask for a code if attempted login from an unrecognised device or browser.")), /*#__PURE__*/_react.default.createElement(_reactSwitch.default, {
      className: "mr-2",
      uncheckedIcon: false,
      height: 20,
      width: 40,
      onChange: this.handleTwoFactorChange,
      checked: this.state.enableTwoFactor
    }))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item py-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "Get alerts about unrecognised logins"), /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "You will be notified if anyone logs in from a device or browser you don't usually use")), /*#__PURE__*/_react.default.createElement(_reactSwitch.default, {
      className: "mr-2",
      uncheckedIcon: false,
      height: 20,
      width: 40,
      onChange: this.handleUnrecognisedLogins,
      checked: this.state.unrecognisedLogins
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-footer d-flex justify-content-end"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-link text-muted mx-1"
    }, "Reset"), /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-primary",
      type: "button"
    }, "Save Changes"))))))));
  }
}
var _default = Settings;
exports.default = _default;