import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar1 from "../../../assets/media/avatar/1.png";
import avatar2 from "../../../assets/media/avatar/2.png";
import avatar3 from "../../../assets/media/avatar/3.png";
import avatar4 from "../../../assets/media/avatar/4.png";
import avatar5 from "../../../assets/media/avatar/5.png";
import avatar6 from "../../../assets/media/avatar/6.png";
import avatar7 from "../../../assets/media/avatar/7.png";
import photo1 from "../../../assets/media/shared-photos/01.jpg";
import photo2 from "../../../assets/media/shared-photos/02.jpg";
import photo3 from "../../../assets/media/shared-photos/03.jpg";

import { ReactComponent as BackToList } from "../../../assets/media/icons/backtolist.svg";
import { ReactComponent as SearchSvg } from "../../../assets/media/icons/search.svg";
import { ReactComponent as CallNowSvg } from "../../../assets/media/icons/callnow.svg";
import { ReactComponent as VerticalOptionDots } from "../../../assets/media/icons/verticaloptiondots.svg";
import { ReactComponent as InfoSvg } from "../../../assets/media/icons/infosvg.svg";
import { ReactComponent as MuteNotificationsSvg } from "../../../assets/media/icons/mutenotifications.svg";
import { ReactComponent as WallpaperSvg } from "../../../assets/media/icons/wallpaper.svg";
import { ReactComponent as ArchiveSvg } from "../../../assets/media/icons/archive.svg";
import { ReactComponent as DeleteSvg } from "../../../assets/media/icons/delete.svg";
import { ReactComponent as BlockSvg } from "../../../assets/media/icons/block.svg";
import { ReactComponent as ChatDocFileSvg } from "../../../assets/media/icons/chatdocmessage.svg";

import { ReactComponent as ChatPlusSvg } from "../../../assets/media/icons/chatplus.svg";
import { ReactComponent as EmojiSvg } from "../../../assets/media/icons/emoji.svg";
import { ReactComponent as GallarySvg } from "../../../assets/media/icons/gallary.svg";
import { ReactComponent as AudioSvg } from "../../../assets/media/icons/audio.svg";
import { ReactComponent as ContactSvg } from "../../../assets/media/icons/contact.svg";
import { ReactComponent as LocationSvg } from "../../../assets/media/icons/location.svg";
import { ReactComponent as PollSvg } from "../../../assets/media/icons/poll.svg";
import { ReactComponent as SendMessageSvg } from "../../../assets/media/icons/sendmessage.svg";
import { ReactComponent as UserGroupSvg } from "../../../assets/media/icons/usergroup.svg";
import { ReactComponent as CloseSvg } from "../../../assets/media/icons/close.svg";

import { ReactComponent as DocumentsSvg } from "../../../assets/media/icons/documents.svg";
import { ReactComponent as ProfileDocumentsSvg } from "../../../assets/media/icons/profiledocuments.svg";
import { Dropdown } from "react-bootstrap";

import DocumentOptionDropdown from "./Dropdowns/DocumentOptionDropdown";
import GroupParticipantOptionDropdown from "./Dropdowns/GroupParticipantOptionDropdown";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { ThemeColor, ProfileType, MessageType } from "../../../Config/Config";
import ImageMessage from "./MessageTypes/ImageMessage";
import TextMessage from "./MessageTypes/TextMessage";
import DocMessage from "./MessageTypes/DocMessage";

// Group chat component for group messaging
class GroupChat extends Component {
  state = {
    showProfileDetail: true,
    showChatPlusPopup: false,
    chatSearchBox: false,
    showParticipants: true,
    showLastMedia: true,
    showDocuments: true,
    search: "",
    emojiWidth: window.innerWidth / 16 + "rem",
    themeColor: Boolean(localStorage.getItem("theme"))
      ? parseInt(localStorage.getItem("theme"))
      : ThemeColor.Light,
    message: "",
    AllMessageList: [
      {
        name: "Brittany Williams",
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: MessageType.Text,
        profile: avatar1,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "Wow! Today is October 30th! Halloween is tomorrow already! Have you decided what you will be dressing up for Halloween yet, Sara?",
      },
      {
        timeGroup: "Yesterday",
        isSentByMe: true,
        type: MessageType.Text,
        profile: avatar6,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "I'm not sure what I want to be yet. I want to be either a butterfly or a pumpkin. But why do we dress up for Halloween?",
        isEdited: true,
      },
      {
        name: "Jacqueline James",
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: MessageType.Text,
        profile: avatar7,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "Halloween is a festival for children, and costumes make it more special. I think we have much more fun going from house to house asking for candies (trick-or-treating) after sunset dressed in our favourite costumes.",
      },
      {
        name: "Bonnie Torres",
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: MessageType.Text,
        profile: avatar2,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "Yes, I remember having a lot of fun last year when mom took me around in a bunny outfit. Do you know what you want to be yet, Patrick?",
      },
      {
        timeGroup: "Yesterday",
        isSentByMe: true,
        type: MessageType.Text,
        profile: avatar6,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "I want to be Batman! I like wearing the cape and the mask. I think you should be a butterfly. You are so much shorter than me, and dressed in a pumpkin costume, someone might think you really are one and try to make a pie out of you.",
      },
      {
        name: "Annie Richardson",
        timeGroup: "Yesterday",
        isSentByMe: false,
        type: MessageType.Text,
        profile: avatar5,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "How could anyone mistake me for a real pumpkin? Real pumpkins do not have a head or arms or legs. But I suppose I will be a butterfly anyway. I can have pretty wings.",
      },
      {
        timeGroup: "Today",
        isSentByMe: true,
        type: MessageType.Text,
        profile: avatar6,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "Great! So you will be a butterfly and I will be Batman. Let’s go ask Mom if we can go trick-or-treating tomorrow night by ourselves. Although you are still young, I think I am old enough to watch over the both of us.",
        isEdited: true,
      },
      {
        name: "Katherine Schneider",
        timeGroup: "Today",
        isSentByMe: false,
        type: MessageType.Text,
        profile: avatar4,
        profileType: ProfileType.Image,
        time: "9:12am",
        message: "OK, let’s go ask mom!",
      },
      {
        timeGroup: "Today",
        isSentByMe: true,
        type: MessageType.Text,
        profile: avatar6,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "MOM! Can Sara and I go trick-or-treating by ourselves tomorrow? I can watch over Sara and make sure she stays out of trouble.",
        isEdited: true,
      },
      {
        name: "Gemma Mendez",
        timeGroup: "Today",
        isSentByMe: false,
        type: MessageType.Text,
        profile: avatar3,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "Yes, Mom. If we go by ourselves, then you can stay home and relax. You will not have to get cold waiting for us.",
      },
      {
        timeGroup: "Today",
        isSentByMe: true,
        type: MessageType.Text,
        profile: avatar6,
        profileType: ProfileType.Image,
        time: "9:12am",
        message:
          "Thank you for offering, Patrick. However, I will be worried and I will not be able to relax if you and your brother go by yourselves while I stay home. Let me ask Christine or Ian if one of them can go with both of you. Then I can stay home and relax. Christine! Ian!",
        isEdited: true,
      },
    ],
    FilteredMessagesList: [],
    TimeGroups: [],
  };

  constructor() {
    super();
    this.messagesEndRef = React.createRef();
    this.searchRef = React.createRef();

    window.onresize = () => {
      let width = window.innerWidth / 16;
      if (width >= 50) width = 50;
      this.setState({ emojiWidth: width + "rem" });
    };
  }

  componentDidMount() {
    let timeGroups = [...this.state.TimeGroups];
    this.state.AllMessageList.map((msg, index) => {
      if (timeGroups.filter((x) => x.key === msg.timeGroup).length === 0)
        timeGroups.push({ key: msg.timeGroup, index });
      return true;
    });
    this.setState(
      {
        FilteredMessagesList: [...this.state.AllMessageList],
        TimeGroups: timeGroups,
      },
      () => {
        this.messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.toggleChatSearchBox, false);
  }

  toggleShowProfileDetail = () => {
    this.setState({ showProfileDetail: !this.state.showProfileDetail });
    document.body.click();
  };

  show = (elem) => {
    // Get the natural height of the element
    var getHeight = function () {
      elem.style.display = "block"; // Make it visible
      var height = elem.scrollHeight + "px"; // Get it's height
      elem.style.display = ""; //  Hide it again
      return height;
    };

    var height = getHeight(); // Get the natural height
    elem.classList.add("show"); // Make the element visible
    elem.style.height = height; // Update the max-height

    // Once the transition is complete, remove the inline max-height so the content can scale responsively
    setTimeout(() => {
      elem.style.height = "";
    }, 350);
  };

  // Hide an element
  hide = (elem) => {
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
  };

  toggleChatSearchBox = () => {
    let elem = document.querySelector(".search-box");
    if (elem.classList.contains("show")) {
      this.hide(elem);
    } else {
      this.show(elem);
      this.searchRef.current.focus();
    }
    document.body.click();
  };

  toggleShowParticipants = () => {
    this.setState({ showParticipants: !this.state.showParticipants });
  };
  handleSearch = (event) => {
    let search = event.target.value;
    let filteredMessagesList = [...this.state.AllMessageList];
    if (search) {
      filteredMessagesList = filteredMessagesList.filter(
        (x) => x.message.toLowerCase().search(search.toLowerCase()) >= 0
      );
    }
    this.setState(
      { search: search, FilteredMessagesList: filteredMessagesList },
      () => {}
    );
  };

  toggleShowLastMedia = () => {
    this.setState({ showLastMedia: !this.state.showLastMedia });
  };

  toggleShowDocuments = () => {
    this.setState({ showDocuments: !this.state.showDocuments });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  getCaret = (el) => {
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
  };

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      if (event.shiftKey === false) this.handleSendMessage();
      else {
        let content = this.state.message;
        var caret = this.getCaret(event);
        content =
          content.substring(0, caret) +
          "\n" +
          content.substring(content, content.length - 1);
        event.stopPropagation();
        this.setState({ message: event.target.value });
      }
    }
  };

  handleSendMessage = () => {
    if (this.state.message.length) {
      const myClass = this;

      let messages = [...myClass.state.FilteredMessagesList];
      messages.push({
        timeGroup: "Today",
        isSentByMe: true,
        type: MessageType.Text,
        profile: avatar6,
        profileType: ProfileType.Image,
        time: "Just now",
        message: this.state.message,
      });
      this.setState({ message: "", FilteredMessagesList: messages }, () => {
        if (messages.length > 5) {
          this.messagesEndRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      });
    }
  };

  handleEmojiSelect = (param) => {
    this.setState({ message: this.state.message + param.native });
  };

  render() {
    return (
      <main className="main main-visible">
        <div className="chats">
          <div className="chat-body">
            <div className="chat-header">
              <Link className="contacts-link" to="/Chats">
                <button
                  className="btn btn-secondary btn-icon btn-minimal btn-sm d-xl-none"
                  type="button"
                  data-close=""
                >
                  <BackToList />
                </button>
              </Link>

              <div className="media chat-name align-items-center text-truncate">
                <div className="avatar bg-success text-light d-none d-sm-inline-block mr-3">
                  <span>
                    <UserGroupSvg />
                  </span>
                </div>

                <div className="media-body align-self-center ">
                  <h6 className="text-truncate mb-0">Themeforest Group</h6>
                  <small className="text-muted">252 Participants</small>
                </div>
              </div>
              <ul className="nav flex-nowrap">
                <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                  <Link
                    className="nav-link text-muted px-1"
                    to="#"
                    onClick={this.toggleChatSearchBox}
                  >
                    <SearchSvg />
                  </Link>
                </li>
                <li className="nav-item list-inline-item d-none d-sm-block mr-1">
                  <Link
                    className="nav-link text-muted px-1"
                    to="#"
                    title="Call Now"
                  >
                    <CallNowSvg />
                  </Link>
                </li>
                <li className="nav-item list-inline-item d-none d-sm-block mr-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="text-muted hw-20 mt-2"
                      as={VerticalOptionDots}
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <CallNowSvg className="hw-20 mr-2" />
                        <span>Call</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                        onClick={this.toggleChatSearchBox}
                      >
                        <SearchSvg className="hw-20 mr-2" />
                        <span>Search</span>
                      </Link>

                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                        onClick={this.toggleShowProfileDetail}
                      >
                        <InfoSvg className="hw-20 mr-2" />
                        <span>View Info</span>
                      </Link>

                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <MuteNotificationsSvg className="hw-20 mr-2" />
                        <span>Mute Notifications</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <WallpaperSvg className="hw-20 mr-2" />
                        <span>Wallpaper</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <ArchiveSvg className="hw-20 mr-2" />
                        <span>Archive</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <DeleteSvg className="hw-20 mr-2" />
                        <span>Delete</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex text-danger"
                        to="#"
                      >
                        <BlockSvg className="hw-20 mr-2" />
                        <span>Block</span>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item list-inline-item d-sm-none mr-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="text-muted hw-20"
                      as={VerticalOptionDots}
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <CallNowSvg className="hw-20 mr-2" />
                        <span>Call</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <SearchSvg className="hw-20 mr-2" />
                        <span>Search</span>
                      </Link>

                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                        onClick={this.toggleShowProfileDetail}
                      >
                        <InfoSvg className="hw-20 mr-2" />
                        <span>View Info</span>
                      </Link>

                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <MuteNotificationsSvg className="hw-20 mr-2" />
                        <span>Mute Notifications</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <WallpaperSvg className="hw-20 mr-2" />
                        <span>Wallpaper</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <ArchiveSvg className="hw-20 mr-2" />
                        <span>Archive</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex"
                        to="#"
                      >
                        <DeleteSvg className="hw-20 mr-2" />
                        <span>Delete</span>
                      </Link>
                      <Link
                        className="dropdown-item align-items-center d-flex text-danger"
                        to="#"
                      >
                        <BlockSvg className="hw-20 mr-2" />
                        <span>Block</span>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
            <div
              className={
                "border-bottom px-3 collapse search-box " +
                (this.state.chatSearchBox ? "show" : "")
              }
            >
              <div className="container-xl py-2 px-0 px-md-3">
                <div className="input-group bg-light ">
                  <input
                    type="text"
                    className="form-control form-control-md border-right-0 bg-transparent pr-0"
                    placeholder="Search..."
                    ref={this.searchRef}
                    value={this.state.search}
                    onChange={this.handleSearch}
                  ></input>
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent border-left-0">
                      <SearchSvg className="hw-20" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-content p-2">
              <div className="container">
                {this.state.FilteredMessagesList.map((msg, index) => {
                  return (
                    <div key={"msg-" + index}>
                      {this.state.TimeGroups.filter((x) => x.index === index)
                        .length ? (
                        <div
                          className="message-divider pb-2"
                          data-label={
                            this.state.TimeGroups.filter(
                              (x) => x.index === index
                            )[0].key
                          }
                        ></div>
                      ) : null}
                      <div
                        className={"message " + (msg.isSentByMe ? "self" : "")}
                        ref={
                          index === this.state.FilteredMessagesList.length - 1
                            ? this.messagesEndRef
                            : null
                        }
                      >
                        {msg.type === MessageType.Text ? (
                          <TextMessage {...msg} search={this.state.search} />
                        ) : msg.type === MessageType.Images ? (
                          <ImageMessage {...msg} search={this.state.search} />
                        ) : msg.type === MessageType.Doc ? (
                          <DocMessage {...msg} search={this.state.search} />
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="chat-finished" id="chat-finished"></div>
            </div>

            <div className="chat-footer">
              <div className="form-row align-items-center">
                <div className="col">
                  <div className="input-group">
                    <div className="input-group-prepend mr-sm-2 mr-1">
                      <Dropdown>
                        <Dropdown.Toggle
                          className="text-muted hw-20"
                          as={ChatPlusSvg}
                        ></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Link className="dropdown-item" to="#">
                            <GallarySvg className="hw-20 mr-2" />
                            <span>Gallery</span>
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <AudioSvg />
                            <span>Audio</span>
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <ChatDocFileSvg className="hw-20 mr-2" />
                            <span>Document</span>
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <ContactSvg />
                            <span>Contact</span>
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <LocationSvg />
                            <span>Location</span>
                          </Link>
                          <Link className="dropdown-item" to="#">
                            <PollSvg />
                            <span>Poll</span>
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <input
                      type="text"
                      className="form-control bg-transparent border-0 no-resize hide-scrollbar"
                      placeholder="Write your message..."
                      rows="1"
                      value={this.state.message}
                      onChange={this.handleMessageChange}
                      onKeyPress={this.handleKeyPress}
                    ></input>
                    <div className="input-group-prepend mr-sm-2 mr-1">
                      <Dropdown className="w-100">
                        <Dropdown.Toggle
                          className="text-muted hw-20"
                          as={EmojiSvg}
                        ></Dropdown.Toggle>
                        <Dropdown.Menu className="border-0 color-none">
                          <Picker
                            className="emoji-picker"
                            title="Pick your emoji…"
                            emoji="point_up"
                            showPreview={false}
                            set="facebook"
                            theme={
                              this.state.themeColor === ThemeColor.Light
                                ? "light"
                                : "dark"
                            }
                            style={{
                              width: this.state.emojiWidth,
                              maxWidth: "65rem",
                            }}
                            onSelect={this.handleEmojiSelect}
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    className="btn btn-primary btn-icon rounded-circle text-light mb-1"
                    role="button"
                    onClick={this.handleSendMessage}
                  >
                    <SendMessageSvg />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              "chat-info " +
              (this.state.showProfileDetail ? "chat-info-visible" : "")
            }
          >
            <div className="d-flex h-100 flex-column">
              <div className="chat-info-header px-2">
                <div className="container-fluid">
                  <ul className="nav justify-content-between align-items-center">
                    <li className="text-center">
                      <h5 className="text-truncate mb-0">Profile Details</h5>
                    </li>

                    <li className="nav-item list-inline-item">
                      <Link
                        className="nav-link text-muted px-0"
                        to="#"
                        onClick={this.toggleShowProfileDetail}
                      >
                        <CloseSvg />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="hide-scrollbar flex-fill">
                <div className="border-bottom text-center p-3">
                  <div className="avatar bg-success text-light avatar-xl mx-5 mb-3">
                    <span>
                      <UserGroupSvg className="hw-50" />
                    </span>
                  </div>

                  <h5 className="mb-1">Themeforest Group</h5>
                  <p className="text-muted d-flex align-items-center justify-content-center">
                    <LocationSvg className="mr-1 hw-18" />
                    <span>252 Participants</span>
                  </p>
                </div>

                <div className="chat-info-group">
                  <Link
                    className="chat-info-group-header"
                    to="#"
                    onClick={this.toggleShowParticipants}
                  >
                    <h6 className="mb-0">Group Participants</h6>
                    <UserGroupSvg className="hw-20 text-muted" />
                  </Link>

                  <div
                    className={
                      "chat-info-group-body collapse " +
                      (this.state.showParticipants ? "show" : "")
                    }
                    id="participants-list"
                  >
                    <div className="chat-info-group-content list-item-has-padding">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="media align-items-center">
                            <div className="avatar mr-2">
                              <img src={avatar1} alt=""></img>
                            </div>

                            <div className="media-body">
                              <h6 className="text-truncate">
                                <Link to="#" className="text-reset">
                                  Catherine Richardson
                                </Link>
                              </h6>
                              <p className="text-muted mb-0">
                                Product designer
                              </p>
                            </div>

                            <div className="media-options ml-1">
                              <GroupParticipantOptionDropdown />
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="media align-items-center">
                            <div className="avatar mr-2">
                              <img src={avatar2} alt=""></img>
                            </div>

                            <div className="media-body">
                              <h6 className="text-truncate">
                                <Link to="#" className="text-reset">
                                  Maizie Edwards
                                </Link>
                              </h6>
                              <p className="text-muted mb-0">Team leader</p>
                            </div>

                            <div className="media-options ml-1">
                              <GroupParticipantOptionDropdown />
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="media align-items-center">
                            <div className="avatar mr-2">
                              <img src={avatar3} alt=""></img>
                            </div>

                            <div className="media-body">
                              <h6 className="text-truncate">
                                <Link to="#" className="text-reset">
                                  Brittany K. Williams
                                </Link>
                              </h6>
                              <p className="text-muted mb-0">UI/UX designer</p>
                            </div>

                            <div className="media-options ml-1">
                              <GroupParticipantOptionDropdown />
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="media align-items-center">
                            <div className="avatar mr-2">
                              <img src={avatar4} alt=""></img>
                            </div>

                            <div className="media-body">
                              <h6 className="text-truncate">
                                <Link to="#" className="text-reset">
                                  Albert K. Johansen
                                </Link>
                              </h6>
                              <p className="text-muted mb-0">Sr. developer</p>
                            </div>

                            <div className="media-options ml-1">
                              <GroupParticipantOptionDropdown />
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="media align-items-center">
                            <div className="avatar mr-2">
                              <img src={avatar5} alt=""></img>
                            </div>

                            <div className="media-body">
                              <h6 className="text-truncate">
                                <Link to="#" className="text-reset">
                                  Christopher Garcia
                                </Link>
                              </h6>
                              <p className="text-muted mb-0">Project manager</p>
                            </div>

                            <div className="media-options ml-1">
                              <GroupParticipantOptionDropdown />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="chat-info-group">
                  <Link
                    className="chat-info-group-header"
                    to="#"
                    onClick={this.toggleShowLastMedia}
                  >
                    <h6 className="mb-0">Last Media</h6>
                    <GallarySvg className="hw-20 text-muted" />
                  </Link>
                  <div
                    className={
                      "chat-info-group-body collapse " +
                      (this.state.showLastMedia ? "show" : "")
                    }
                  >
                    <div className="chat-info-group-content">
                      <div className="form-row">
                        <div className="col-4 col-md-2 col-xl-4">
                          <Link to="#">
                            <img
                              src={photo1}
                              className="img-fluid rounded border"
                              alt=""
                            ></img>
                          </Link>
                        </div>
                        <div className="col-4 col-md-2 col-xl-4">
                          <Link to="#">
                            <img
                              src={photo2}
                              className="img-fluid rounded border"
                              alt=""
                            ></img>
                          </Link>
                        </div>
                        <div className="col-4 col-md-2 col-xl-4">
                          <Link to="#">
                            <img
                              src={photo3}
                              className="img-fluid rounded border"
                              alt=""
                            ></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-info-group">
                  <Link
                    className="chat-info-group-header"
                    to="#"
                    onClick={this.toggleShowDocuments}
                  >
                    <h6 className="mb-0">Documents</h6>
                    <DocumentsSvg className="hw-20 text-muted" />
                  </Link>

                  <div
                    className={
                      "chat-info-group-body collapse " +
                      (this.state.showDocuments ? "show" : "")
                    }
                    id="shared-files"
                  >
                    <div className="chat-info-group-content list-item-has-padding">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="document">
                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                              <ProfileDocumentsSvg />
                            </div>

                            <div className="document-body">
                              <h6 className="text-truncate">
                                <Link
                                  to="#"
                                  className="text-reset"
                                  title="effects-of-global-warming.docs"
                                >
                                  Effects-of-global-warming.docs
                                </Link>
                              </h6>

                              <ul className="list-inline small mb-0">
                                <li className="list-inline-item">
                                  <span className="text-muted">79.2 KB</span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="text-muted text-uppercase">
                                    docs
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="document-options ml-1">
                              <DocumentOptionDropdown />
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="document">
                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                              <ProfileDocumentsSvg />
                            </div>

                            <div className="document-body">
                              <h6 className="text-truncate">
                                <Link
                                  to="#"
                                  className="text-reset"
                                  title="global-warming-data-2020.xlxs"
                                >
                                  Global-warming-data-2020.xlxs
                                </Link>
                              </h6>

                              <ul className="list-inline small mb-0">
                                <li className="list-inline-item">
                                  <span className="text-muted">79.2 KB</span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="text-muted text-uppercase">
                                    xlxs
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="document-options ml-1">
                              <DocumentOptionDropdown />
                            </div>
                          </div>
                        </li>

                        <li className="list-group-item">
                          <div className="document">
                            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
                              <ProfileDocumentsSvg />
                            </div>

                            <div className="document-body">
                              <h6 className="text-truncate">
                                <Link
                                  to="#"
                                  className="text-reset"
                                  title="great-presentation-on global-warming-2020.ppt"
                                >
                                  Great-presentation-on global-warming-2020.ppt
                                </Link>
                              </h6>

                              <ul className="list-inline small mb-0">
                                <li className="list-inline-item">
                                  <span className="text-muted">79.2 KB</span>
                                </li>
                                <li className="list-inline-item">
                                  <span className="text-muted text-uppercase">
                                    ppt
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="document-options ml-1">
                              <DocumentOptionDropdown />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default GroupChat;
