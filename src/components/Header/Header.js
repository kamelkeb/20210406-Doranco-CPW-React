import React from "react";
import classNames from "./Header.module.css";

function Header({ prenom }) {
  return (
    <div className={classNames.myHeader}>Mon Header Bonjour {prenom} !</div>
  );
}

export default Header;
