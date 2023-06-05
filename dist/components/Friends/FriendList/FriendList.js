"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _ChatAction = _interopRequireDefault(require("../../ChatAction/ChatAction"));
var _search = require("../../../assets/media/icons/search.svg");
var _Friend = _interopRequireDefault(require("./Friend"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Friend list component to list all friends
class FriendList extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      search: "",
      AllFriends: [{
        name: "Albert K. Johansen",
        location: "San Fransisco, CA",
        active: true
      }, {
        name: "Alice R. Botello",
        location: "Brentwood, NY"
      }, {
        name: "Brittany K. Williams",
        location: "Scranton, PA"
      }, {
        name: "Christopher Garcia",
        location: "Riverside, CA"
      }, {
        name: "Casey Mcbride",
        location: "Zephyr, NC"
      }, {
        name: "Gemma Mendez",
        location: "Frederick, MD"
      }, {
        name: "Katelyn Valdez",
        location: "Jackson, TN"
      }, {
        name: "Katherine Schneider",
        location: "Saginaw, MI"
      }, {
        name: "Maizie Edwards",
        location: "Greensboro, NC"
      }, {
        name: "Susan K. Taylor",
        location: "Centerville, VA"
      }],
      FilteredFriends: [],
      filteredGroups: []
    });
    _defineProperty(this, "setVisible", () => {
      this.props.setMainVisible();
    });
    _defineProperty(this, "handleSearch", event => {
      let filteredFriends = [...this.state.AllFriends].filter(x => x.name.toLocaleLowerCase().search(event.target.value.toLocaleLowerCase()) >= 0);
      let groups = [];
      filteredFriends.map((friend, index) => {
        if (groups.filter(group => group.g === friend.name.charAt(0).toLocaleLowerCase()).length === 0) {
          groups.push({
            g: friend.name.charAt(0).toLocaleLowerCase(),
            index
          });
        }
        return true;
      });
      this.setState({
        search: event.target.value,
        FilteredFriends: filteredFriends,
        filteredGroups: groups
      });
    });
  }
  componentDidMount() {
    let groups = [];
    this.state.AllFriends.map((friend, index) => {
      if (groups.filter(group => group.g === friend.name.charAt(0).toLocaleLowerCase()).length === 0) {
        groups.push({
          g: friend.name.charAt(0).toLocaleLowerCase(),
          index
        });
      }
      return true;
    });
    this.setState({
      FilteredFriends: [...this.state.AllFriends],
      filteredGroups: groups
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("aside", {
      className: "sidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-pane active",
      id: "friends-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column h-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "hide-scrollbar",
      id: "friendsList"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-header sticky-top p-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "font-weight-semibold mb-0"
    }, "Friends"), /*#__PURE__*/_react.default.createElement(_ChatAction.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-sub-header"
    }, /*#__PURE__*/_react.default.createElement("form", {
      className: "form-inline w-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group w-100"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control search border-right-0 transparent-bg pr-0",
      placeholder: "Search users...",
      value: this.state.search,
      onChange: this.handleSearch
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-append"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-text transparent-bg border-left-0",
      role: "button"
    }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, {
      className: "text-muted hw-20"
    }))))))), /*#__PURE__*/_react.default.createElement("ul", {
      className: "contacts-list",
      id: "friendsTab"
    }, this.state.FilteredFriends.length ? this.state.FilteredFriends.map((friend, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "friend-" + index
      }, this.state.filteredGroups.filter(x => x.index === index).length ? /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("small", {
        className: "font-weight-medium text-uppercase text-muted"
      }, this.state.filteredGroups.filter(x => x.index === index)[0].g)) : null, /*#__PURE__*/_react.default.createElement(_Friend.default, friend));
    }) : null))))));
  }
}
var _default = FriendList;
exports.default = _default;