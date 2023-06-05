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
var _logo = _interopRequireDefault(require("../../assets/media/logo.svg"));
var _Config = require("../../Config/Config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Documentation component
class Documentation extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      themeColor: localStorage.getItem("theme")
    });
  }
  componentDidMount() {
    // Load light  screen only in documentation
    let classList = document.body.classList;
    if (classList.length === 0 && this.state.themeColor === _Config.ThemeColor.Dark) {
      document.body.classList.add("dark-skin");
    } else if (classList.length && this.state.themeColor === _Config.ThemeColor.Light) {
      document.body.classList.remove("dark-skin");
    }
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "documentation-page"
    }, /*#__PURE__*/_react.default.createElement("nav", {
      className: "navbar navbar-light bg-white border-bottom fixed-top"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "navbar-brand",
      to: "/",
      style: {
        color: "#665dfe",
        fontWeight: 600
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _logo.default,
      width: "30",
      height: "30",
      className: "d-inline-block align-top",
      alt: "",
      loading: "lazy"
    }), "Quicky"), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "/Chats",
      className: "btn btn-md btn-primary mx-2"
    }, "View demo"), /*#__PURE__*/_react.default.createElement("a", {
      href: "https://themeforest.net/item/quicky-react-chat-template/30002388",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "btn btn-md btn-danger"
    }, "Purchase now")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "main pt-5"
    }, /*#__PURE__*/_react.default.createElement("section", {
      className: "border-bottom py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center text-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-xxl-7 col-xl-8 col-lg-9 col-md-10"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "badge badge-secondary"
    }, "v1.4"), /*#__PURE__*/_react.default.createElement("h1", {
      className: "display-4 text-primary font-weight-semibold"
    }, "Quicky Documentation"), /*#__PURE__*/_react.default.createElement("div", {
      className: "lead"
    }, "Thank you so much to see our template.", /*#__PURE__*/_react.default.createElement("br", null), " This is guide to understand how to compile, build and customize and run project."), /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid mt-3",
      src: "./../assets/media/tools.png",
      alt: ""
    }))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "border-bottom py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-8"
    }, /*#__PURE__*/_react.default.createElement("h4", null, "Introduction"), /*#__PURE__*/_react.default.createElement("div", {
      className: "lead mb-0"
    }, "Quicky, a modern and clean premium quality messaging template based on React and Bootstrap 4 using concept driven and minimal design. It's well optimized with mobile first responsive approach."))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "border-bottom py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-8"
    }, /*#__PURE__*/_react.default.createElement("h4", null, "File Structure"), /*#__PURE__*/_react.default.createElement("p", {
      className: "lead pb-3"
    }, "Learn more about file structure of Quicky.")), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-8"
    }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "node_modules"), " ", "- Directory where ", /*#__PURE__*/_react.default.createElement("code", null, "npm"), " installs dependencies."), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "public"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "index.html")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "src"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "assets"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "css"), " ", "- Compiled CSS"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "js"), " ", "- Javascript file"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "media"), " ", "- Image & icon assets"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "vendors"), " ", "- Third party plugins"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "webfonts"), " ", "- Webfonts"))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "components"), " ", "- React components"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "Config"), " ", "- Global configuration"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "folder"
    }, "\uD83D\uDCC1"), " ", "Routing"), " ", "- React routing"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "file"
    }, "\uD83D\uDCC4"), " ", "App.js")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "file"
    }, "\uD83D\uDCC4"), " ", "index.js")))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("span", {
      role: "img",
      "aria-labelledby": "file"
    }, "\uD83D\uDCC4"), " ", "package.json"), " ", "- List of dependencies and npm information")))))), /*#__PURE__*/_react.default.createElement("section", {
      className: "border-bottom py-5"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "row justify-content-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-lg-8"
    }, /*#__PURE__*/_react.default.createElement("h4", null, "Quick start -Install"), /*#__PURE__*/_react.default.createElement("div", {
      className: "lead pb-3"
    }, "This template requires Node CLI. Please follow these steps to install the required technologies:"), /*#__PURE__*/_react.default.createElement("h5", null, "1. Installing Node.js"), /*#__PURE__*/_react.default.createElement("div", {
      className: "mb-5"
    }, "If you do not have Node installed already, you can get it by downloading the package installer from Node's website. You need to have Node.js installed onto your computer.", /*#__PURE__*/_react.default.createElement("a", {
      href: "https://nodejs.org/en/download/",
      className: "link",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Download and install Node.js \u2192")), /*#__PURE__*/_react.default.createElement("h5", null, "2. Installing Dependency"), /*#__PURE__*/_react.default.createElement("ul", {
      className: "mb-5"
    }, /*#__PURE__*/_react.default.createElement("li", null, "Go to Project directory with cmd or terminal."), /*#__PURE__*/_react.default.createElement("li", null, "Run ", /*#__PURE__*/_react.default.createElement("code", null, "npm i"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "This command will install necessary dependencies."))), /*#__PURE__*/_react.default.createElement("li", null, "Run ", /*#__PURE__*/_react.default.createElement("code", null, "npm start"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "This command will start local server in web browser."), /*#__PURE__*/_react.default.createElement("li", null, "Hit ", /*#__PURE__*/_react.default.createElement("code", null, "CTRL+C"), " to terminate the local server from running.")))), /*#__PURE__*/_react.default.createElement("h5", null, "3. Create a production build"), /*#__PURE__*/_react.default.createElement("div", null, "You can change content according your requirements. When ypu are done, you can run below command to generate build for production upload."), /*#__PURE__*/_react.default.createElement("div", {
      className: "highlight"
    }, /*#__PURE__*/_react.default.createElement("code", null, "npm run build ")), /*#__PURE__*/_react.default.createElement("div", null, "Above command will generate ", /*#__PURE__*/_react.default.createElement("code", null, "build"), " folder in your project directory. You can upload content of", " ", /*#__PURE__*/_react.default.createElement("code", null, "build"), " folder to production server.")))))));
  }
}
var _default = Documentation;
exports.default = _default;