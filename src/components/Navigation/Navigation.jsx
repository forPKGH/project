import React from "react";
import { Link } from 'react-router-dom';

import Button from "../Button/Button";
import '../Navigation/navigation.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/">
            <Button text="На главную" icon="../public/icons/home.svg" layout="icon-absolute" variant="filled" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/chat">
            <Button text="Чаты" icon="../public/icons/chat.svg" layout="icon-absolute" variant="filled" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/psycologist-list">
            <Button text="Психологи" icon="../public/icons/team.svg" layout="icon-absolute" variant="filled" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/5-4-3-2-1">
            <Button text='Практика "5-4-3-2-1"' icon="../public/icons/eye.svg" layout="icon-absolute" variant="filled" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/4-4-4-4">
            <Button text='Дыхание "4-4-4-4"' icon="../public/icons/chill.svg" layout="icon-absolute" variant="filled" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;