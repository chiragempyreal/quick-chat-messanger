"use strict";

require("core-js/modules/es.object.assign.js");
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
var _ = _interopRequireDefault(require("../../../assets/media/avatar/2.png"));
var _2 = _interopRequireDefault(require("../../../assets/media/avatar/3.png"));
var _3 = _interopRequireDefault(require("../../../assets/media/avatar/4.png"));
var _4 = _interopRequireDefault(require("../../../assets/media/avatar/5.png"));
var _5 = _interopRequireDefault(require("../../../assets/media/avatar/6.png"));
var _6 = _interopRequireDefault(require("../../../assets/media/avatar/7.png"));
var _ChatAction = _interopRequireDefault(require("../../ChatAction/ChatAction"));
var _CallFilter = _interopRequireDefault(require("../../FilterDropdowns/CallFilter"));
var _missedcall = require("../../../assets/media/icons/missedcall.svg");
var _phoneOutgoing = require("../../../assets/media/heroicons/solid/phone-outgoing.svg");
var _phoneIncoming = require("../../../assets/media/heroicons/solid/phone-incoming.svg");
var _Config = require("../../../Config/Config");
var _Call = _interopRequireDefault(require("./Call"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Call list Component
class CallList extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      filterOption: _Config.CallFilterOptions.AllCalls,
      search: "",
      AllCallList: [{
        to: "#",
        name: "Catherine Richardson",
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "Just now",
        filter: _Config.CallFilterOptions.Incoming,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
          className: "hw-16 text-muted mr-1"
        }),
        active: true
      }, {
        to: "#",
        name: "Eva Walker",
        profile: "EW",
        profileType: _Config.ProfileType.Text,
        time: "5 mins ago",
        filter: _Config.CallFilterOptions.Outgoing,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_phoneOutgoing.ReactComponent, {
          className: "hw-16 text-muted mr-1"
        })
      }, {
        to: "#",
        name: "Christopher Garcia",
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "20 mins ago",
        filter: _Config.CallFilterOptions.Missedcalls,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_missedcall.ReactComponent, {
          className: "hw-16 text-danger mr-1"
        })
      }, {
        to: "#",
        name: "Christina Turner",
        profile: _3.default,
        profileType: _Config.ProfileType.Image,
        time: "4 hour ago",
        filter: _Config.CallFilterOptions.Outgoing,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_phoneOutgoing.ReactComponent, {
          className: "hw-16 text-muted mr-1"
        })
      }, {
        to: "#",
        name: "Tammy Martinez",
        profile: _4.default,
        profileType: _Config.ProfileType.Image,
        time: "Yesterday",
        filter: _Config.CallFilterOptions.Incoming,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
          className: "hw-16 text-muted mr-1"
        })
      }, {
        to: "#",
        name: "Bonnie Torres",
        profile: _5.default,
        profileType: _Config.ProfileType.Image,
        time: "01/04/2021",
        filter: _Config.CallFilterOptions.Incoming,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_phoneIncoming.ReactComponent, {
          className: "hw-16 text-muted mr-1"
        })
      }, {
        to: "#",
        name: "Jacqueline James",
        profile: _6.default,
        profileType: _Config.ProfileType.Image,
        time: "23/03/2021",
        filter: _Config.CallFilterOptions.Outgoing,
        CallTypeIcon: /*#__PURE__*/_react.default.createElement(_phoneOutgoing.ReactComponent, {
          className: "hw-16 text-muted mr-1"
        })
      }],
      FilterCallList: []
    });
    _defineProperty(this, "setVisible", () => {
      this.props.setMainVisible();
    });
    _defineProperty(this, "handleFilterOptionChanged", option => {
      let callList = [...this.state.AllCallList];
      if (option !== _Config.CallFilterOptions.AllCalls) callList = callList.filter(x => x.filter === option);
      this.setState({
        filterOption: option,
        FilterCallList: callList,
        search: ""
      });
    });
    _defineProperty(this, "handleSearchCall", event => {
      let callList = [...this.state.AllCallList];
      if (this.state.filterOption !== _Config.CallFilterOptions.AllCalls) callList = callList.filter(x => x.filter === this.state.filterOption);
      if (event.target.value) {
        callList = callList.filter(x => x.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0);
      }
      this.setState({
        search: event.target.value,
        FilterCallList: callList
      });
    });
  }
  componentDidMount() {
    this.setState({
      FilterCallList: [...this.state.AllCallList]
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("aside", {
      className: "sidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-pane active",
      id: "calls-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column h-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "hide-scrollbar h-100",
      id: "callContactsList"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-header sticky-top p-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "font-weight-semibold mb-0"
    }, "Calls"), /*#__PURE__*/_react.default.createElement(_ChatAction.default, null)), /*#__PURE__*/_react.default.createElement(_CallFilter.default, {
      selectedOption: this.state.filterOption,
      filterOptionChanged: this.handleFilterOptionChanged,
      search: this.state.search,
      handleSearch: this.handleSearchCall
    })), /*#__PURE__*/_react.default.createElement("ul", {
      className: "contacts-list",
      id: "callLogTab",
      "data-call-list": ""
    }, this.state.AllCallList && this.state.AllCallList.length && this.state.FilterCallList.map((call, index) => {
      return /*#__PURE__*/_react.default.createElement(_Call.default, _extends({
        key: "call-" + index
      }, call));
    })))))));
  }
}
var _default = CallList;
exports.default = _default;