"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ = _interopRequireDefault(require("../../../assets/media/avatar/2.png"));
var _2 = _interopRequireDefault(require("../../../assets/media/avatar/6.png"));
var _3 = _interopRequireDefault(require("../../../assets/media/shared-photos/01.jpg"));
var _4 = _interopRequireDefault(require("../../../assets/media/shared-photos/02.jpg"));
var _5 = _interopRequireDefault(require("../../../assets/media/shared-photos/03.jpg"));
var _backtolist = require("../../../assets/media/icons/backtolist.svg");
var _search = require("../../../assets/media/icons/search.svg");
var _callnow = require("../../../assets/media/icons/callnow.svg");
var _verticaloptiondots = require("../../../assets/media/icons/verticaloptiondots.svg");
var _infosvg = require("../../../assets/media/icons/infosvg.svg");
var _mutenotifications = require("../../../assets/media/icons/mutenotifications.svg");
var _wallpaper = require("../../../assets/media/icons/wallpaper.svg");
var _archive = require("../../../assets/media/icons/archive.svg");
var _delete = require("../../../assets/media/icons/delete.svg");
var _block = require("../../../assets/media/icons/block.svg");
var _chatdocmessage = require("../../../assets/media/icons/chatdocmessage.svg");
var _chatplus = require("../../../assets/media/icons/chatplus.svg");
var _emoji = require("../../../assets/media/icons/emoji.svg");
var _gallary = require("../../../assets/media/icons/gallary.svg");
var _audio = require("../../../assets/media/icons/audio.svg");
var _contact = require("../../../assets/media/icons/contact.svg");
var _location = require("../../../assets/media/icons/location.svg");
var _poll = require("../../../assets/media/icons/poll.svg");
var _sendmessage = require("../../../assets/media/icons/sendmessage.svg");
var _addcontact = require("../../../assets/media/icons/addcontact.svg");
var _heart = require("../../../assets/media/icons/heart.svg");
var _close = require("../../../assets/media/icons/close.svg");
var _documents = require("../../../assets/media/icons/documents.svg");
var _profiledocuments = require("../../../assets/media/icons/profiledocuments.svg");
var _reactBootstrap = require("react-bootstrap");
var _DocumentOptionDropdown = _interopRequireDefault(require("./Dropdowns/DocumentOptionDropdown"));
require("lightgallery.js/dist/css/lightgallery.css");
require("emoji-mart/css/emoji-mart.css");
var _emojiMart2 = require("emoji-mart");
var _Config = require("../../../Config/Config");
require("../Chats.css");
var _ImageMessage = _interopRequireDefault(require("./MessageTypes/ImageMessage"));
var _TextMessage = _interopRequireDefault(require("./MessageTypes/TextMessage"));
var _DocMessage = _interopRequireDefault(require("./MessageTypes/DocMessage"));
var _messenger = _interopRequireDefault(require("../../../assets/media/audio/messenger.mp3"));
var _reactAutocompleteInput = _interopRequireDefault(require("react-autocomplete-input"));
require("react-autocomplete-input/dist/bundle.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } //import TextareaAutosize from 'react-textarea-autosize';
// User  chat detail component - chat with users
class UserChat extends _react.Component {
  constructor() {
    super();
    _defineProperty(this, "state", {
      showProfileDetail: true,
      chatSearchBox: false,
      showUserInformation: true,
      showLastMedia: true,
      showDocuments: true,
      search: "",
      emojiWidth: window.innerWidth / 16 + "rem",
      themeColor: Boolean(localStorage.getItem("theme")) ? parseInt(localStorage.getItem("theme")) : _Config.ThemeColor.Light,
      message: "",
      AllMessageList: [{
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: _Config.MessageType.Text,
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        message: "I have to give a presentation on global warming on Friday, and I am so nervous."
      }, {
        timeGroup: "Yesterday",
        isSentByMe: true,
        type: _Config.MessageType.Text,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: true,
        message: "First of all, you need to understand the subject matter thoroughly. You need to know what is global warming, what causes global warming, and what people should do to abate the effects of global warming."
      }, {
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: _Config.MessageType.Text,
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        message: "I have done a lot of research on the subject, and I know I can answer any questions I will receive from the audience."
      }, {
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: _Config.MessageType.Text,
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        message: "I should talk about more precisely the sequence of my presentation?"
      }, {
        timeGroup: "Yesterday",
        isSentByMe: true,
        type: _Config.MessageType.Text,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        message: "Yes, what you should present first, second and third…"
      }, {
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: _Config.MessageType.Doc,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        message: "global-warming-data-2020.xlsx",
        size: "79.2 KB",
        extension: "xlsx"
      }, {
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: _Config.MessageType.Text,
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        message: "If that is the case, then I already have an outline. To make it easy for my audience to follow the presentation, I intend to post the outline on the board at all time during my speech."
      }, {
        timeGroup: "Today",
        isSentByMe: true,
        type: _Config.MessageType.Text,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: true,
        message: "Good idea! By the way, do you have any facts to back you up? For example, change of climate, yearly disasters…"
      }, {
        timeGroup: "Today",
        isSentByMe: false,
        type: _Config.MessageType.Images,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: false,
        images: [_3.default, _4.default, _5.default],
        message: "I have shared some photos, Please have a look."
      }, {
        timeGroup: "Today",
        isSentByMe: false,
        type: _Config.MessageType.Text,
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: false,
        message: "No, I have not thought about that. I better get some statistics from the Internet. I should not have any problems since the Internet has all kinds of data."
      }, {
        timeGroup: "Today",
        isSentByMe: true,
        type: _Config.MessageType.Text,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: false,
        message: "Pictures will keep your audience from being bored. In order for you to succeed, you need to keep them interested and involved."
      }, {
        timeGroup: "Today",
        isSentByMe: false,
        type: _Config.MessageType.Text,
        profile: _.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: false,
        message: "You are absolutely right. I will take time to practice and to learn to relax and express myself really well. Wish me luck, Catherine!"
      }, {
        timeGroup: "Today",
        isSentByMe: true,
        type: _Config.MessageType.Text,
        profile: _2.default,
        profileType: _Config.ProfileType.Image,
        time: "9:12am",
        isEdited: false,
        message: "I know you. You can do it. Good luck, Jennifer!"
      }],
      FilteredMessagesList: [],
      TimeGroups: [],
      disabled: false,
      maxOptions: "6",
      options: {
        "/": ["Welcome", "Good", "Smile", "Enjoy"]
      },
      regex: "^[a-zA-Z0-9_\\-]+$",
      requestOnlyIfNoOptions: true,
      spaceRemovers: "[',', '.', '?', '!']",
      spacer: " ",
      trigger: ["/"]
    });
    _defineProperty(this, "audio", new Audio(_messenger.default));
    // componentWillUnmount() {
    //   window.removeEventListener("keydown", this.toggleChatSearchBox, false);
    // }
    _defineProperty(this, "toggleShowProfileDetail", () => {
      this.setState({
        showProfileDetail: !this.state.showProfileDetail
      });
      document.body.click();
    });
    // Show an element
    _defineProperty(this, "show", elem => {
      // Get the natural height of the element
      var getHeight = function getHeight() {
        elem.style.display = "block"; // Make it visible
        var height = elem.scrollHeight + "px"; // Get it's height
        elem.style.display = ""; //  Hide it again
        return height;
      };
      var height = getHeight(); // Get the natural height
      elem.classList.add("show"); // Make the element visible
      elem.style.height = height; // Update the max-height
      // elem.focus();
      // Once the transition is complete, remove the inline max-height so the content can scale responsively
      setTimeout(() => {
        elem.style.height = "";
      }, 350);
    });
    // Hide an element
    _defineProperty(this, "hide", elem => {
      // Give the element a height to change from
      elem.style.height = elem.scrollHeight + "px";

      // Set the height back to 0
      setTimeout(() => {
        elem.style.height = "0";
      }, 1);

      // When the transition is complete, hide it
      setTimeout(() => {
        elem.classList.remove("show");
      }, 350);
    });
    _defineProperty(this, "toggleChatSearchBox", () => {
      let elem = document.querySelector(".search-box");
      if (elem.classList.contains("show")) {
        this.hide(elem);
      } else {
        this.show(elem);
        this.searchRef.current.focus();
      }
      document.body.click();
    });
    _defineProperty(this, "toggleShowUserInformation", () => {
      this.setState({
        showUserInformation: !this.state.showUserInformation
      });
    });
    _defineProperty(this, "toggleShowLastMedia", () => {
      this.setState({
        showLastMedia: !this.state.showLastMedia
      });
    });
    _defineProperty(this, "toggleShowDocuments", () => {
      this.setState({
        showDocuments: !this.state.showDocuments
      });
    });
    _defineProperty(this, "handleMessageChange", value => {
      this.setState({
        //message: this.state.message + value.replace(this.state.message, ""),
        message: value
      });
    });
    _defineProperty(this, "getCaret", el => {
      if (el.selectionStart) {
        return el.selectionStart;
      } else if (document.selection) {
        el.focus();
        var r = document.selection.createRange();
        if (r == null) {
          return 0;
        }
        var re = el.createTextRange(),
          rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint("EndToStart", re);
        return rc.text.length;
      }
      return 0;
    });
    _defineProperty(this, "handleKeyPress", event => {
      if (event.charCode === 13) {
        if (event.shiftKey === false) {
          event.preventDefault();
          this.handleSendMessage();
        } else {
          let content = this.state.message;
          var caret = this.getCaret(event);
          content = content.substring(0, caret) + "\n" + content.substring(content, content.length - 1);
          event.stopPropagation();
          //this.setState({ message: event.target.value });
          // this.setState({
          //   message: this.state.message + String.fromCharCode(event.charCode),
          // });
        }
      } else {}
      // this.setState({
      //   message: this.state.message + String.fromCharCode(event.charCode),
      // });
    });
    _defineProperty(this, "handleSendMessage", () => {
      if (this.state.message.length) {
        const myClass = this;
        let messages = [...myClass.state.FilteredMessagesList];
        messages.push({
          timeGroup: "Today",
          isSentByMe: true,
          type: _Config.MessageType.Text,
          profile: _2.default,
          profileType: _Config.ProfileType.Image,
          time: "Just now",
          message: this.state.message
        });
        document.getElementsByClassName("txtMessage").innerHTML = "";
        this.setState({
          message: "",
          FilteredMessagesList: messages
        }, () => {
          if (messages.length > 5) {
            this.audio.play();
            setTimeout(() => {
              this.messagesEndRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end"
              });
            }, 200);
          }
        });
      }
    });
    _defineProperty(this, "handleEmojiSelect", param => {
      this.setState({
        message: this.state.message + param.native
      });
    });
    _defineProperty(this, "handleSearch", event => {
      let search = event.target.value;
      let filteredMessagesList = [...this.state.AllMessageList];
      if (search) {
        filteredMessagesList = filteredMessagesList.filter(x => x.message.toLowerCase().search(search.toLowerCase()) >= 0);
      }
      this.setState({
        search: search,
        FilteredMessagesList: filteredMessagesList
      }, () => {});
    });
    _defineProperty(this, "selectOption", value => {
      this.setState({
        message: this.state.message + value.replace(this.state.message, "").replace("/", "")
      });
    });
    this.messagesEndRef = /*#__PURE__*/_react.default.createRef();
    this.searchRef = /*#__PURE__*/_react.default.createRef();
    window.onresize = () => {
      let width = window.innerWidth / 16;
      if (width >= 50) width = 50;
      this.setState({
        emojiWidth: width + "rem"
      });
    };
    window.removeEventListener("keydown", this.toggleChatSearchBox, false);
    window.addEventListener("keydown", event => {
      if (event.ctrlKey && event.code === "KeyF") {
        event.preventDefault();
        this.toggleChatSearchBox();
      }
    });

    // this.handleAddOption = this.handleAddOption.bind(this);
    // this.handleDisable = this.handleDisable.bind(this);
    // this.handleMaxOptionChange = this.handleMaxOptionChange.bind(this);
    // this.handleRegexChange = this.handleRegexChange.bind(this);
    // this.handleRequestOnlyIfNoOptions = this.handleRequestOnlyIfNoOptions.bind(
    //   this
    // );
    // this.handleRequestOptions = this.handleRequestOptions.bind(this);
    // this.handleSpaceRemoversChange = this.handleSpaceRemoversChange.bind(this);
    // this.handleSpacerChange = this.handleSpacerChange.bind(this);
    // this.handleTriggerChange = this.handleTriggerChange.bind(this);
  }

  componentDidMount() {
    let timeGroups = [...this.state.TimeGroups];
    this.state.AllMessageList.map((msg, index) => {
      if (timeGroups.filter(x => x.key === msg.timeGroup).length === 0) timeGroups.push({
        key: msg.timeGroup,
        index
      });
      return true;
    });
    this.setState({
      FilteredMessagesList: [...this.state.AllMessageList],
      TimeGroups: timeGroups
    }, () => {
      this.messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("main", {
      className: "main main-visible"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chats"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-body"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-header"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "contacts-link",
      to: "/Chats"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none",
      type: "button"
    }, /*#__PURE__*/_react.default.createElement(_backtolist.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("div", {
      className: "media chat-name align-items-center text-truncate"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-instagram d-none d-sm-inline-block mr-3"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "media-body align-self-center "
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate mb-0"
    }, "Catherine Richardson"), /*#__PURE__*/_react.default.createElement("small", {
      className: "text-muted"
    }, "Online"))), /*#__PURE__*/_react.default.createElement("ul", {
      className: "nav flex-nowrap"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item d-none d-sm-block mr-1"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "nav-link text-muted px-1",
      onClick: this.toggleChatSearchBox,
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item d-none d-sm-block mr-1"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "nav-link text-muted px-1",
      to: "#",
      title: "Call Now"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, null))), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item d-none d-sm-block mr-0"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20 mt-2",
      as: _verticaloptiondots.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "dropdown-menu dropdown-menu-right"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      onClick: this.toggleChatSearchBox,
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Search")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#",
      onClick: this.toggleShowProfileDetail
    }, /*#__PURE__*/_react.default.createElement(_infosvg.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "View Info")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_mutenotifications.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Mute Notifications")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_wallpaper.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Wallpaper")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_archive.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Archive")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_delete.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Delete")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex text-danger",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_block.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Block"))))), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item d-sm-none mr-0"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20",
      as: _verticaloptiondots.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "dropdown-menu dropdown-menu-right"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_callnow.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Call")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      onClick: this.toggleChatSearchBox,
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Search")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#",
      onClick: this.toggleShowProfileDetail
    }, /*#__PURE__*/_react.default.createElement(_infosvg.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "View Info")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_mutenotifications.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Mute Notifications")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_wallpaper.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Wallpaper")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_archive.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Archive")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_delete.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Delete")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item align-items-center d-flex text-danger",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_block.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Block"))))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "border-bottom px-3 collapse search-box " + (this.state.chatSearchBox ? "show" : "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container-xl py-2 px-0 px-md-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group bg-light "
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      className: "form-control form-control-md border-right-0 transparent-bg pr-0",
      placeholder: "Search...",
      ref: this.searchRef,
      value: this.state.search,
      onChange: this.handleSearch
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-append"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-text transparent-bg border-left-0"
    }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, {
      className: "hw-20 text-muted"
    })))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-content p-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, this.state.FilteredMessagesList.map((msg, index) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "msg-" + index
      }, this.state.TimeGroups.filter(x => x.index === index).length ? /*#__PURE__*/_react.default.createElement("div", {
        className: "message-divider pb-2",
        "data-label": this.state.TimeGroups.filter(x => x.index === index)[0].key
      }) : null, /*#__PURE__*/_react.default.createElement("div", {
        className: "message " + (msg.isSentByMe ? "self" : ""),
        ref: index === this.state.FilteredMessagesList.length - 1 ? this.messagesEndRef : null
      }, msg.type === _Config.MessageType.Text ? /*#__PURE__*/_react.default.createElement(_TextMessage.default, _extends({}, msg, {
        search: this.state.search
      })) : msg.type === _Config.MessageType.Images ? /*#__PURE__*/_react.default.createElement(_ImageMessage.default, _extends({}, msg, {
        search: this.state.search
      })) : msg.type === _Config.MessageType.Doc ? /*#__PURE__*/_react.default.createElement(_DocMessage.default, _extends({}, msg, {
        search: this.state.search
      })) : null));
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-finished",
      id: "chat-finished"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-footer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-row align-items-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-prepend mr-sm-2 mr-1"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20",
      as: _chatplus.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "dropdown-menu"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_gallary.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Gallery")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_audio.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Audio")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_chatdocmessage.ReactComponent, {
      className: "hw-20 mr-2"
    }), /*#__PURE__*/_react.default.createElement("span", null, "Document")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_contact.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Contact")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_location.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Location")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "dropdown-item",
      to: "#"
    }, /*#__PURE__*/_react.default.createElement(_poll.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "Poll"))))), /*#__PURE__*/_react.default.createElement(_reactAutocompleteInput.default, {
      className: "txtMessage form-control transparent-bg border-0 no-resize hide-scrollbar"
      // trigger={["/"]}
      // options={{
      //   "/": ["/Welcome", "/Good", "/Smile", "/Enjoy"],
      // }}
      ,
      rows: "1",
      placeholder: "Write your message...",
      value: this.state.message,
      onKeyPress: this.handleKeyPress,
      onChange: this.handleMessageChange
      // style={{
      //   width: "300px",
      //   height: "100px",
      //   display: "block",
      // }}
      ,
      maxOptions: parseInt(this.state.maxOptions, 10),
      onSelect: this.selectOption,
      options: this.state.options
      // regex={this.state.regex}
      ,
      requestOnlyIfNoOptions: this.state.requestOnlyIfNoOptions,
      spaceRemovers: eval(this.state.spaceRemovers),
      spacer: this.state.spacer,
      trigger: this.state.trigger
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "input-group-prepend mr-sm-2 mr-1"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown, {
      className: "w-100"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
      className: "text-muted hw-20",
      as: _emoji.ReactComponent
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Menu, {
      className: "border-0 color-none"
    }, /*#__PURE__*/_react.default.createElement(_emojiMart2.Picker, {
      className: "emoji-picker",
      title: "Pick your emoji\u2026",
      emoji: "point_up",
      showPreview: true,
      set: "facebook",
      theme: this.state.themeColor === _Config.ThemeColor.Light ? "light" : "dark",
      style: {
        width: this.state.emojiWidth,
        maxWidth: "65rem"
      },
      onSelect: this.handleEmojiSelect
    })))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-auto"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mb-1",
      role: "button",
      onClick: this.handleSendMessage
    }, /*#__PURE__*/_react.default.createElement(_sendmessage.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info " + (this.state.showProfileDetail ? "chat-info-visible" : "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex h-100 flex-column"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-header px-2"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "container-fluid"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "nav justify-content-between align-items-center"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "text-center"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "text-truncate mb-0"
    }, "Profile Details")), /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item list-inline-item"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "nav-link text-muted px-0",
      to: "#",
      onClick: this.toggleShowProfileDetail
    }, /*#__PURE__*/_react.default.createElement(_close.ReactComponent, null)))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "hide-scrollbar flex-fill"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "text-center p-3"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "avatar avatar-xl mx-5 mb-3"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "avatar-img",
      src: _.default,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("h5", {
      className: "mb-1"
    }, "Catherine Richardson"), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-muted d-flex align-items-center justify-content-center"
    }, /*#__PURE__*/_react.default.createElement(_location.ReactComponent, null), /*#__PURE__*/_react.default.createElement("span", null, "San Fransisco, CA")), /*#__PURE__*/_react.default.createElement("div", {
      className: "d-flex align-items-center justify-content-center"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-outline-default btn-icon rounded-circle mx-1"
    }, /*#__PURE__*/_react.default.createElement(_addcontact.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mx-1"
    }, /*#__PURE__*/_react.default.createElement(_heart.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-danger btn-icon rounded-circle text-light mx-1"
    }, /*#__PURE__*/_react.default.createElement(_block.ReactComponent, null)))), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "chat-info-group-header",
      "data-toggle": "collapse",
      to: "#",
      onClick: this.toggleShowUserInformation
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-0"
    }, "User Information"), /*#__PURE__*/_react.default.createElement(_infosvg.ReactComponent, {
      className: "hw-20 text-muted"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group-body collapse " + (this.state.showUserInformation ? "show" : "")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group-content list-item-has-padding"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush "
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item border-0"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Phone"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "+01-222-364522")), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item border-0"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Email"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "catherine.richardson@gmail.com")), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item border-0"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "small text-muted mb-0"
    }, "Address"), /*#__PURE__*/_react.default.createElement("p", {
      className: "mb-0"
    }, "1134 Ridder Park Road, San Fransisco, CA 94851")))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "chat-info-group-header",
      "data-toggle": "collapse",
      to: "#",
      onClick: this.toggleShowLastMedia
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-0"
    }, "Last Media"), /*#__PURE__*/_react.default.createElement(_gallary.ReactComponent, {
      className: "hw-20 text-muted"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group-body collapse " + (this.state.showLastMedia ? "show" : ""),
      id: "shared-media"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "col-4 col-md-2 col-xl-4"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _3.default,
      className: "img-fluid rounded border",
      alt: ""
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-4 col-md-2 col-xl-4"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _4.default,
      className: "img-fluid rounded border",
      alt: ""
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "col-4 col-md-2 col-xl-4"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _5.default,
      className: "img-fluid rounded border",
      alt: ""
    }))))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      className: "chat-info-group-header",
      "data-toggle": "collapse",
      to: "#",
      onClick: this.toggleShowDocuments
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "mb-0"
    }, "Documents"), /*#__PURE__*/_react.default.createElement(_documents.ReactComponent, {
      className: "hw-20 text-muted"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group-body collapse " + (this.state.showDocuments ? "show" : ""),
      id: "shared-files"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-info-group-content list-item-has-padding"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-group list-group-flush"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "document"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_profiledocuments.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "document-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset",
      title: "effects-of-global-warming.docs"
    }, "Effects-of-global-warming.docs")), /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-inline small mb-0"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted"
    }, "79.2 KB")), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted text-uppercase"
    }, "docs")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "document-options ml-1"
    }, /*#__PURE__*/_react.default.createElement(_DocumentOptionDropdown.default, null)))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "document"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_profiledocuments.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "document-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset",
      title: "global-warming-data-2020.xlxs"
    }, "Global-warming-data-2020.xlxs")), /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-inline small mb-0"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted"
    }, "79.2 KB")), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted text-uppercase"
    }, "xlxs")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "document-options ml-1"
    }, /*#__PURE__*/_react.default.createElement(_DocumentOptionDropdown.default, null)))), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-group-item"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "document"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn btn-primary btn-icon rounded-circle text-light mr-2"
    }, /*#__PURE__*/_react.default.createElement(_profiledocuments.ReactComponent, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "document-body"
    }, /*#__PURE__*/_react.default.createElement("h6", {
      className: "text-truncate"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "#",
      className: "text-reset",
      title: "great-presentation-on global-warming-2020.ppt"
    }, "Great-presentation-on global-warming-2020.ppt")), /*#__PURE__*/_react.default.createElement("ul", {
      className: "list-inline small mb-0"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted"
    }, "79.2 KB")), /*#__PURE__*/_react.default.createElement("li", {
      className: "list-inline-item"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-muted text-uppercase"
    }, "ppt")))), /*#__PURE__*/_react.default.createElement("div", {
      className: "document-options ml-1"
    }, /*#__PURE__*/_react.default.createElement(_DocumentOptionDropdown.default, null)))))))))))));
  }
}
var _default = UserChat;
exports.default = _default;