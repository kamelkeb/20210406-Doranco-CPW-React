import React from "react";
import classNames from "./MyButton.module.css";

const MyButton = ({ onClick, titre, size }) => {
  let styleName;

  switch (size) {
    case "small":
      styleName = classNames.myButtonSmall;
      break;
    case "medium":
      styleName = classNames.myButtonMedium;
      break;
    case "big":
      styleName = classNames.myButtonBig;
      break;
    default:
      styleName = classNames.myButtonMedium;
      break;
  }

  return (
    <button className={styleName} onClick={onClick}>
      {titre}
    </button>
  );
};

export default MyButton;
