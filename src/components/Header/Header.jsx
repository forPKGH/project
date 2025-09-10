import React from "react";
import Button from "../Button/Button";

import "../Header/header.css"

const Header = () => {
  const getGreeting = (time) => {
    time = new Date().getHours();

    if (time >= 5 && time < 12) {
      return "Доброе утро";
    } else if (time >= 12 && time < 16) {
      return "Добрый день";
    } else if (time >= 16 && time < 22) {
      return "Добрый вечер";
    } else {
      return "Доброй ночи";
    }
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Button icon='../../../icons/user.svg' variant="filled" layout="icon" />
          <h1>{getGreeting()}</h1>
          <Button icon='../../../icons/settings.svg' variant="filled" layout="icon" />
        </div>
      </div>
    </header>
  )
}

export default Header;