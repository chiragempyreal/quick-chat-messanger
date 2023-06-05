import React from "react";
import MessageDropdown from "../Dropdowns/MessageDropdown";
import RenderSearchMessage from "./RenderSearchMessage";

const TextMessage = (props) => {
  return (
    <>
      <div className="message-wrapper">
        <div className="message-content">
          {props.name ? <h6 className="text-dark">{props.name}</h6> : null}
          <RenderSearchMessage {...props} />
          {/* <span className="message-string">{props.message}</span> */}
        </div>
      </div>
      <div className="message-options">
        <div className="avatar avatar-sm">
          <img alt="" src={props.profile}></img>
        </div>
        <span className="message-date">{props.time}</span>
        {props.isEdited ? <span className="message-status">Edited</span> : null}
        <MessageDropdown />
      </div>
    </>
  );
};
export default TextMessage;
