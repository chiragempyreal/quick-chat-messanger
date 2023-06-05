"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLightgallery = require("react-lightgallery");
var _MessageDropdown = _interopRequireDefault(require("../Dropdowns/MessageDropdown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ImageMessage = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "message-content"
  }, props.message ? /*#__PURE__*/_react.default.createElement("h6", null, props.message) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/_react.default.createElement(_reactLightgallery.LightgalleryProvider, null, props.images.map((image, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: image,
      className: "col"
    }, /*#__PURE__*/_react.default.createElement(_reactLightgallery.LightgalleryItem, {
      group: "group1",
      src: image,
      thumb: image
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "photo1",
      src: image,
      style: {
        width: "100%"
      }
    })));
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "message-options"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar avatar-sm"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: props.profile
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "message-date"
  }, props.time), props.isEdited ? /*#__PURE__*/_react.default.createElement("span", {
    className: "message-status"
  }, "Edited") : null, /*#__PURE__*/_react.default.createElement(_MessageDropdown.default, null)));
};
var _default = ImageMessage;
exports.default = _default;