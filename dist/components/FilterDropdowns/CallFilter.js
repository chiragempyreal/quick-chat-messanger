"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
var _Config = require("../../Config/Config.js");
var _search = require("../../assets/media/icons/search.svg");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Top chat filter
const CallFilter = props => {
  const [selectedTitle, setSelectedTitle] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    switch (props.selectedOption) {
      case _Config.CallFilterOptions.AllCalls:
        setSelectedTitle("All Calls");
        break;
      case _Config.CallFilterOptions.Incoming:
        setSelectedTitle("Incoming");
        break;
      case _Config.CallFilterOptions.Outgoing:
        setSelectedTitle("Outgoing");
        break;
      case _Config.CallFilterOptions.Missedcalls:
        setSelectedTitle("Missed Calls");
        break;
      default:
        break;
    }
    return () => {};
  }, [props.selectedOption]);
  const handleChange = async eventKey => {
    // console.log(eventKey);
    await props.filterOptionChanged(parseInt(eventKey));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-sub-header"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
    className: "border-0 f-16 p-0 min-w-150 cut-texts",
    variant: "outline-default",
    onSelect: handleChange,
    title: selectedTitle
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    eventKey: _Config.CallFilterOptions.AllCalls,
    active: props.selectedOption === _Config.CallFilterOptions.AllCalls
  }, "All Calls"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    eventKey: _Config.CallFilterOptions.Incoming,
    active: props.selectedOption === _Config.CallFilterOptions.Incoming
  }, "Incoming"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    eventKey: _Config.CallFilterOptions.Outgoing,
    active: props.selectedOption === _Config.CallFilterOptions.Outgoing
  }, "Outgoing"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
    eventKey: _Config.CallFilterOptions.Missedcalls,
    active: props.selectedOption === _Config.CallFilterOptions.Missedcalls
  }, "Missed Calls")), /*#__PURE__*/_react.default.createElement("form", {
    className: "form-inline"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control search border-right-0 transparent-bg pr-0",
    placeholder: "Search users...",
    value: props.search,
    onChange: props.handleSearch
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-text transparent-bg border-left-0",
    role: "button"
  }, /*#__PURE__*/_react.default.createElement(_search.ReactComponent, {
    className: "text-muted hw-20"
  }))))));
};
var _default = CallFilter;
exports.default = _default;