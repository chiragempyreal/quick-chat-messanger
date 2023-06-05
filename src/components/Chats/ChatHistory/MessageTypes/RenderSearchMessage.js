import React from "react";

const RenderSearchMessage = (props) => {
  const getIndicesOf = (searchStr, str) => {
    var searchStrLen = searchStr.length;
    if (searchStrLen === 0) {
      return [];
    }
    var startIndex = 0,
      index,
      indices = [];
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  };
  let message = props.message;
  let search = props.search;

  var indices = getIndicesOf(search, message);
  // console.log(indices);
  let formattedMessage = "";

  if (indices && indices.length) {
    if (indices.length === 1) {
      formattedMessage += message.substring(0, indices[0]);
      formattedMessage +=
        "<mark>" +
        message.substring(indices[0], indices[0] + search.length) +
        "</mark>";
      formattedMessage += message.substring(
        indices[0] + search.length,
        message.length
      );
    } else {
      for (let i = 0; indices && i < indices.length; i++) {
        let cut = message.substring(indices[i], indices[i] + search.length);
        if (i === 0) formattedMessage += message.substring(0, indices[i]);
        else
          formattedMessage += message.substring(
            indices[i - 1] + search.length,
            indices[i]
          );
        formattedMessage += "<mark>" + cut + "</mark>";
        if (i === indices.length - 1)
          formattedMessage += message.substring(
            indices[i] + search.length,
            message.length
          );
      }
    }
    return (
      <div
        style={{ whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: formattedMessage }}
      ></div>
    );
  }
  return <div style={{ whiteSpace: "pre-wrap" }}>{props.message}</div>;
};
export default RenderSearchMessage;
