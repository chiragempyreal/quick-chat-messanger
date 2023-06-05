"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _lightSkin = _interopRequireDefault(require("../../assets/media/ui/light-skin.jpg"));
var _darkSkin = _interopRequireDefault(require("../../assets/media/ui/dark-skin.jpg"));
var _lsSignin = _interopRequireDefault(require("../../assets/media/ui/ls-signin.jpg"));
var _dsSignin = _interopRequireDefault(require("../../assets/media/ui/ds-signin.jpg"));
var _lsSignup = _interopRequireDefault(require("../../assets/media/ui/ls-signup.jpg"));
var _dsSignup = _interopRequireDefault(require("../../assets/media/ui/ds-signup.jpg"));
var _lsResetPassword = _interopRequireDefault(require("../../assets/media/ui/ls-reset-password.jpg"));
var _dsResetPassword = _interopRequireDefault(require("../../assets/media/ui/ds-reset-password.jpg"));
var _rtlDefault = _interopRequireDefault(require("../../assets/media/ui/rtl-default.jpg"));
var _rtlDark = _interopRequireDefault(require("../../assets/media/ui/rtl-dark.jpg"));
var _logo = require("../../assets/media/logo.svg");
var _refresh = _interopRequireDefault(require("../../assets/media/icons/refresh.svg"));
var _question = _interopRequireDefault(require("../../assets/media/icons/question.svg"));
var _pencil = _interopRequireDefault(require("../../assets/media/icons/pencil.svg"));
var _responsive = _interopRequireDefault(require("../../assets/media/icons/responsive.svg"));
var _reactRouterDom = require("react-router-dom");
var _Config = require("../../Config/Config");
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Home page component
class Home extends _react.Component {
  constructor() {
    var _this;
    super(...arguments);
    _this = this;
    _defineProperty(this, "state", {
      themeColor: _Config.ThemeColor.Light
    });
    // Change theme color
    _defineProperty(this, "selectThemeColor", function (color) {
      let isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      localStorage.setItem("theme", color);
      if (isRTL) localStorage.setItem("rtl", isRTL);else localStorage.removeItem("rtl");
      _this.setState({
        themeColor: color
      });
    });
  }
  // Load selected theme
  componentDidMount() {
    this.setState({
      themeColor: _Config.ThemeColor.Light
    });
    let classList = document.body.classList;
    if (classList.length) document.body.classList.remove("dark-skin");
    document.body.removeAttribute("dir");
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
      className: "bg-light theme-shadow card-bg-1 py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center text-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-xxl-7 col-xl-8 col-lg-9 col-md-10"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "badge badge-secondary"
    }, "v1.4"), /*#__PURE__*/_react.default.createElement("h1", {
      className: "display-4 font-weight-semibold text-primary"
    }, "Quicky Messanger"), /*#__PURE__*/_react.default.createElement("p", null, "The powerful React JS messaging framework that especially build for developers and designer to help build messaging and chat application fast and easily. It is a fully responsive template."), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-4"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      className: "btn btn-md btn-primary mb-2 mx-2",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light);
      }
    }, "View demo"), /*#__PURE__*/_react.default.createElement("a", {
      href: "https://themeforest.net/item/quicky-react-chat-template/30002388",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "btn btn-md btn-danger mx-2"
    }, "Purchase now")))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "bg-white border-bottom theme-shadow py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center text-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-8"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "font-weight-semibold pb-4"
    }, "Demos"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light);
      },
      className: "text-reset",
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid rounded-top",
      alt: "",
      src: _lightSkin.default
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "m-0 text-center"
    }, "Light Skin"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Dark);
      },
      className: "text-reset",
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid rounded-top",
      src: _darkSkin.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "m-0 text-center"
    }, "Dark Skin"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light, true);
      },
      className: "text-reset",
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid rounded-top",
      src: _rtlDefault.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "m-0 text-center"
    }, "RTL Light Skin"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Dark, true);
      },
      className: "text-reset",
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid rounded-top",
      src: _rtlDark.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "m-0 text-center"
    }, "RTL Dark Skin"))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/SignIn",
      className: "border rounded d-block theme-shadow-sm overflow-hidden text-reset",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light);
      },
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _lsSignin.default,
      alt: "light signin",
      className: "img-fluid border-bottom rounded-top"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-light text-center py-2"
    }, "Sign in"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/SignUp",
      className: "border rounded d-block theme-shadow-sm overflow-hidden text-reset",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light);
      },
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _lsSignup.default,
      alt: "light signup",
      className: "img-fluid border-bottom rounded-top"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-light text-center py-2"
    }, "Sign up"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/reset-password",
      className: "border rounded d-block theme-shadow-sm overflow-hidden text-reset",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light);
      },
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _lsResetPassword.default,
      alt: "light reset password",
      className: "img-fluid border-bottom rounded-top"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-light text-center  py-2"
    }, "Reset password"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/SignIn",
      className: "border rounded d-block theme-shadow-sm overflow-hidden text-reset",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Dark);
      },
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _dsSignin.default,
      alt: "dark signin",
      className: "img-fluid border-bottom rounded-top"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-light text-center  py-2"
    }, "Sign in"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/SignUp",
      className: "border rounded d-block theme-shadow-sm overflow-hidden text-reset",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Dark);
      },
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _dsSignup.default,
      alt: "dark signup",
      className: "img-fluid border-bottom rounded-top"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-light text-center py-2"
    }, "Sign up"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-sm-6 col-md-4 my-3"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/reset-password",
      className: "border rounded d-block theme-shadow-sm overflow-hidden text-reset",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Dark);
      },
      target: "_blank"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _dsResetPassword.default,
      alt: "dark reset password",
      className: "img-fluid border-bottom rounded-top"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "bg-light text-center py-2"
    }, "Reset password")))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "bg-white border-bottom theme-shadow py-5",
      id: "features"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center text-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-xxl-7 col-xl-8 col-lg-9 col-md-10 pb-4"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "display-5 font-weight-semibold"
    }, "Features Overview")), /*#__PURE__*/_react.default.createElement("div", {
      className: "row row-eq-height"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-3 col-md-4 col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _responsive.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("h6", {
      className: "mt-3"
    }, "Responsive & User-Friendly"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Complete responsive & user-friendly to pleasing your user"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-3 col-md-4 col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _pencil.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("h6", {
      className: "mt-3"
    }, "Easy Customizable"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "We offers highly scalable and endless customization"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-3 col-md-4 col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _refresh.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("h6", {
      className: "mt-3"
    }, "Lifetime Updates"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "Every purchase entitled to free updates \u2013 for lifetime"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-3 col-md-4 col-sm-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "feature text-center border rounded theme-shadow-sm p-3 mb-4 mb-lg-0"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _question.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("h6", {
      className: "mt-3"
    }, "Premium Support"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted mb-0"
    }, "We offer six months of free support to every customer"))))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "bg-white border-bottom theme-shadow py-5",
      id: "faq"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center text-center mb-4"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-xxl-7 col-xl-8 col-lg-9 col-md-10"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "display-5 font-weight-semibold"
    }, "Frequently Asked Questions"))), /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, {
      defaultActiveKey: "1"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
      as: _reactBootstrap.Card.Header,
      eventKey: "1"
    }, "Do you Charge for each Upgrade?"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: "1"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, "Not at all. Once you purchase a license, you'll receive all future releases for free."))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
      as: _reactBootstrap.Card.Header,
      eventKey: "2"
    }, "Do I need to purchase a license for each product/website/webapp?"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: "2"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, "Yes, you need to have a separate license for each product/website/webapp. You might need to purchase extended license for your web application."))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
      as: _reactBootstrap.Card.Header,
      eventKey: "3"
    }, "Which license is applicable for SAAS application?"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: "3"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, "If you are charging your customer for using your SAAS based application you must buy an Extended License for each end product. If you aren't charging your customer then purchase Regular License for each end product."))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
      as: _reactBootstrap.Card.Header,
      eventKey: "4"
    }, "What is regular license?"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: "4"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Regular license can be used for end products that do not charge users for access or service (access is free and there will be no monthly subscription fee)."), /*#__PURE__*/_react.default.createElement("li", null, "Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains (unique setup)."), /*#__PURE__*/_react.default.createElement("li", null, "For more info on Themeforest licenses you can check", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "http://themeforest.net/licenses/standard?license=regular",
      target: "_blank"
    }, "http://themeforest.net/licenses/standard?license=regular")))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
      as: _reactBootstrap.Card.Header,
      eventKey: "5"
    }, "What is extended license?"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: "5"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Extended license can be used for end products (web service or SAAS) that charges users for access or service (e.g: monthly subscription fee)."), /*#__PURE__*/_react.default.createElement("li", null, "Single extended license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate extended license for each client. The same rule applies if you want to use the same end product on multiple domains (unique setup)."), /*#__PURE__*/_react.default.createElement("li", null, "For more info on Theme forest licenses you can check", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "http://themeforest.net/licenses/terms/extended",
      target: "_blank"
    }, "http://themeforest.net/licenses/terms/extended")))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Toggle, {
      as: _reactBootstrap.Card.Header,
      eventKey: "6"
    }, "What happen if you misuse the licence?"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
      eventKey: "6"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "If you had purchased 1 license that should be used for only 1 domain . It should not be used for multiple domains , if you used it for multiple domains that should be a illegal"), /*#__PURE__*/_react.default.createElement("li", null, "It\u2019s a major risk for you and your brand to use something that\u2019s illegal and has serious issues. Regular licence misuse can also result in data theft, data loss or distribution of illegal material. You\u2019ll be using a piece of code without a correct license. All of these can lead to legal proceedings where you\u2019ve to pay a massive chunk of Money to Lawyers."), /*#__PURE__*/_react.default.createElement("li", null, "Therefore, it\u2019s advisable not to make use of licence misuse. If you are already misusing regular licence, which is illegal. In this case, my company background verification team catch you, they will contact your web host provider and get your account suspended. Also They will send legal notice to you and your brand.")))))))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "bg-white border-bottom theme-shadow py-5",
      id: "support"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row row-eq-height justify-content-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "mb-3",
      src: _question.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("h4", {
      className: "display-6 mb-2"
    }, "Need Support?"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted"
    }, "Email us on", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "link",
      to: "#"
    }, "design.frontendmatters@gmail.com"), ". The support response time is 24-48 hours but normally we tend to settle the questions earlier than 24 hours.")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card mb-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-body text-center"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "mb-3",
      src: _question.default,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("h4", {
      className: "display-6 mb-2"
    }, "Pre-Purchase Questions"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted"
    }, "Feel free to ask any questions before making purchase to know more about the theme. We will clear all your questions. Email us on", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "link",
      to: "#"
    }, "design.frontendmatters@gmail.com"), ".", " "))))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "bg-white"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-12 text-center"
    }, /*#__PURE__*/_react.default.createElement(_logo.ReactComponent, {
      width: "80",
      height: "80",
      className: "d-inline-block mb-4"
    }), /*#__PURE__*/_react.default.createElement("h4", {
      className: "display-6 font-weight-semibold"
    }, "Quicky - Complete Chat React JS Template"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-4"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Documentation",
      className: "btn btn-secondary mb-2 mx-2"
    }, "Documentation"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      className: "btn btn-primary mb-2 mx-2",
      onClick: () => {
        this.selectThemeColor(_Config.ThemeColor.Light);
      }
    }, "View demo"), /*#__PURE__*/_react.default.createElement("a", {
      href: "https://themeforest.net/item/quicky-react-chat-template/30002388",
      target: "_blank",
      className: "btn btn-danger mx-2",
      rel: "noopener noreferrer"
    }, "Purchase now")))))));
  }
}
var _default = Home;
exports.default = _default;