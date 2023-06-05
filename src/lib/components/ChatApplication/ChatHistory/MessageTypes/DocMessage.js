import React from "react";
import MessageDropdown from "../Dropdowns/MessageDropdown";
import { ReactComponent as ChatDocFileSvg } from "../../../../assets/media/icons/chatdocmessage.svg";
import { Link } from "react-router-dom";

const DocMessage = (props) => {
  return (
    <>
      <div className="message-wrapper">
        <div className="message-content">
          <div className="document">
            <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">
              <ChatDocFileSvg />
            </div>

            <div className="document-body">
              <h6>
                <Link
                  to="#"
                  className="text-reset"
                  title="global-warming-data-2020.xlxs"
                >
                  {props.message}
                </Link>
              </h6>
              <ul className="list-inline small mb-0">
                <li className="list-inline-item">
                  <span className="text-muted">{props.size}</span>
                </li>
                <li className="list-inline-item">
                  <span className="text-muted text-uppercase">
                    {props.extension}
                  </span>
                </li>
              </ul>
            </div>
          </div>
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
export default DocMessage;
