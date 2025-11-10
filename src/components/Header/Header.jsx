import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Settings from "../Settings/Settings";


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

  const location = useLocation();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (<>
    <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    <header className="header">
      <div className="container">
        <div className="header__inner">
          {location.pathname === "/" ? (<Link to="/Account"><Button icon='../../../icons/user.svg' variant="filled" layout="icon" /></Link>) : (<Link to="/"><Button icon='../../../icons/home.svg' variant="filled" layout="icon" /></Link>)}

          <h1>{getGreeting()}</h1>
          <Button icon='../../../icons/settings.svg' variant="filled" layout="icon" onClick={() => setIsSettingsOpen(true)} />
        </div>
      </div>
    </header >
  </>
  )
}

export default Header;