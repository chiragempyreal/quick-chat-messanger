"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserStatus = exports.ThemeColor = exports.ProfileType = exports.MessageType = exports.ChatFilterOptions = exports.CallFilterOptions = void 0;
// Global configuration
const ThemeColor = {
  Light: 1,
  Dark: 2
};
exports.ThemeColor = ThemeColor;
const UserStatus = {
  Online: 1,
  Offline: 2,
  Away: 3,
  Busy: 4
};
exports.UserStatus = UserStatus;
const ChatFilterOptions = {
  AllChats: 1,
  Friends: 2,
  Groups: 3,
  Unread: 4,
  Archived: 5
};
exports.ChatFilterOptions = ChatFilterOptions;
const CallFilterOptions = {
  AllCalls: 1,
  Incoming: 2,
  Outgoing: 3,
  Missedcalls: 4
};
exports.CallFilterOptions = CallFilterOptions;
const ProfileType = {
  Image: 1,
  Svg: 2,
  Text: 3
};
exports.ProfileType = ProfileType;
const MessageType = {
  Text: 1,
  Images: 2,
  Video: 3,
  Doc: 4
};
exports.MessageType = MessageType;