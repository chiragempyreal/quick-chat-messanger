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
var _7 = _interopRequireDefault(require("../../../assets/media/avatar/8.png"));
var _ChatAction = _interopRequireDefault(require("../../ChatAction/ChatAction"));
var _ChatFilter = _interopRequireDefault(require("../../FilterDropdowns/ChatFilter"));
var _userGroup = require("../../../assets/media/heroicons/outline/user-group.svg");
var _lock = require("../../../assets/media/icons/lock.svg");
var _photo = require("../../../assets/media/icons/photo.svg");
var _docs = require("../../../assets/media/icons/docs.svg");
var _mute = require("../../../assets/media/icons/mute.svg");
var _missedcall = require("../../../assets/media/icons/missedcall.svg");
var _Config = require("../../../Config/Config");
var _ChatMessage = _interopRequireDefault(require("./Message/ChatMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Chat list component - To display list
class ChatList extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      ChatUserId: "",
      search: "",
      filterOption: _Config.ChatFilterOptions.AllChats,
      AllChatList: [{
        ChatUserId: "user1",
        to: "/Chats/user1",
        name: "Catherine Richardson",
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "Just now",
        message: "I’m sorry, I didn’t catch that. Could you please repeat?",
        status: _Config.UserStatus.Online,
        filter: _Config.ChatFilterOptions.Friends,
        badge: true
      }, {
        ChatUserId: "group1",
        to: "/Chats/group1",
        name: "Themeforest Group",
        profile: /*#__PURE__*/_react.default.createElement(_userGroup.ReactComponent, null),
        profileType: _Config.ProfileType.Svg,
        time: "10:20 pm",
        message: "Jeny: That’s pretty common. I heard that a lot of people had the same experience.",
        endIcon: /*#__PURE__*/_react.default.createElement(_lock.ReactComponent, null),
        filter: _Config.ChatFilterOptions.Groups
      }, {
        to: "#",
        name: "Eva Walker",
        profile: "EW",
        profileType: _Config.ProfileType.Text,
        time: "09:36 am",
        message: "You’re kidding! I drive a motorcycle as well. What type of bike do you have?",
        badge: 2,
        status: _Config.UserStatus.Offline,
        filter: _Config.ChatFilterOptions.Unread
      }, {
        to: "#",
        name: "Christopher Garcia",
        time: "Yesterday",
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        status: _Config.UserStatus.Busy,
        MessageSvg: /*#__PURE__*/_react.default.createElement(_photo.ReactComponent, null),
        message: "Photo",
        filter: _Config.ChatFilterOptions.Friends
      }, {
        to: "#",
        name: "Christina Turner",
        time: "31/05/20",
        profile: _3.default,
        profileType: _Config.ProfileType.Image,
        status: _Config.UserStatus.Online,
        message: "I’m working hard in Maths, Physics and Chemistry. I have planning to appear in I.I.T. after XII.",
        filter: _Config.ChatFilterOptions.Friends
      }, {
        to: "#",
        name: "Tammy Martinez",
        time: "24/04/20",
        profile: _4.default,
        profileType: _Config.ProfileType.Image,
        status: _Config.UserStatus.Offline,
        MessageSvg: /*#__PURE__*/_react.default.createElement(_docs.ReactComponent, null),
        message: "project_guidelines.docs",
        filter: _Config.ChatFilterOptions.Friends
      }, {
        to: "#",
        name: "Bonnie Torres",
        time: "20/04/20",
        profile: _5.default,
        profileType: _Config.ProfileType.Image,
        status: _Config.UserStatus.Offline,
        message: "Catch you later! Bye-bye!",
        endIcon: /*#__PURE__*/_react.default.createElement(_mute.ReactComponent, null),
        filter: _Config.ChatFilterOptions.Friends
      }, {
        to: "#",
        name: "Jacqueline James",
        time: "15/02/20",
        profile: _6.default,
        profileType: _Config.ProfileType.Image,
        status: _Config.UserStatus.Offline,
        MessageSvg: /*#__PURE__*/_react.default.createElement(_missedcall.ReactComponent, null),
        message: "Missed call",
        filter: _Config.ChatFilterOptions.Friends
      }, {
        to: "#",
        name: "Annie Richardson",
        time: "26/12/19",
        profile: _7.default,
        profileType: _Config.ProfileType.Image,
        status: _Config.UserStatus.Away,
        message: "I think I have everything I need, thank you!",
        filter: _Config.ChatFilterOptions.Archived
      }],
      FilterChatList: []
    });
    _defineProperty(this, "handleChatClick", id => {
      this.props.handleChatClick();
    });
    _defineProperty(this, "handleFilterOptionChanged", option => {
      let chatList = [...this.state.AllChatList];
      if (option !== _Config.ChatFilterOptions.AllChats) chatList = chatList.filter(x => x.filter === option);
      this.setState({
        filterOption: option,
        FilterChatList: chatList,
        search: ""
      });
    });
    _defineProperty(this, "handleSearchChat", event => {
      let chatList = [...this.state.AllChatList];
      if (this.state.filterOption !== _Config.ChatFilterOptions.AllChats) chatList = chatList.filter(x => x.filter === this.state.filterOption);
      if (event.target.value) {
        chatList = chatList.filter(x => x.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0);
      }
      this.setState({
        search: event.target.value,
        FilterChatList: chatList
      });
    });
  }
  // Get userid from parameter to load perticular user chat history
  componentDidMount() {
    var params = window.location.href.split("/");
    this.setState({
      ChatUserId: params[params.length - 1],
      FilterChatList: this.state.AllChatList.map(chat => {
        chat.active = chat.ChatUserId === params[params.length - 1];
        return chat;
      })
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("aside", {
      className: "sidebar"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "tab-pane active",
      id: "chats-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex flex-column h-100"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "hide-scrollbar h-100",
      id: "chatContactsList"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "sidebar-header sticky-top p-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "font-weight-semibold mb-0"
    }, "Chats"), /*#__PURE__*/_react.default.createElement(_ChatAction.default, null)), /*#__PURE__*/_react.default.createElement(_ChatFilter.default, {
      selectedOption: this.state.filterOption,
      filterOptionChanged: this.handleFilterOptionChanged,
      search: this.state.search,
      handleSearch: this.handleSearchChat
    })), /*#__PURE__*/_react.default.createElement("ul", {
      className: "contacts-list",
      id: "chatContactTab",
      "data-chat-list": ""
    }, this.state.FilterChatList.map((chat, index) => {
      return /*#__PURE__*/_react.default.createElement(_ChatMessage.default, _extends({
        key: "chat" + index
      }, chat, {
        handleChatClick: () => {
          this.handleChatClick(chat.ChatUserId);
        }
      }));
    })))))));
  }
}
var _default = ChatList;
exports.default = _default;