import React from "react";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import MessageDropdown from "../Dropdowns/MessageDropdown";

const ImageMessage = (props) => {
  return (
    <>
      <div className="message-wrapper">
        <div className="message-content">
          {props.message ? <h6>{props.message}</h6> : null}
          <div className="form-row">
            <LightgalleryProvider>
              {props.images.map((image, index) => {
                return (
                  <div key={image} className="col">
                    <LightgalleryItem
                      group={"group1"}
                      src={image}
                      thumb={image}
                    >
                      <img alt="photo1" src={image} style={{ width: "100%" }} />
                    </LightgalleryItem>
                  </div>
                );
              })}
            </LightgalleryProvider>
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
export default ImageMessage;
