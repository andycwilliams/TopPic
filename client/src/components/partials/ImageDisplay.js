import React from "react";
// This handles displaying the images when a user adds their images.
export const ImageDisplay = ({ url, key }) => {
  return (
    <div>
      <img src={url} key={key} alt="" />
    </div>
  );
};
