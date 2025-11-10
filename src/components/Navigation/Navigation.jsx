import React, { useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import Button from "../Button/Button";
import '../Navigation/navigation.css'

const Navigation = () => {

  const location = useLocation();
  const navListRef = useRef(null);

  useEffect(() => {
    if (navListRef.current) {
      navListRef.current.scrollLeft = 0;
    }
  }, [location.pathname]);

  const navItems = [
    {
      path: "/",
      text: "Главная",
      icon: "/icons/home.svg",
      layout: "icon-absolute",
      variant: "filled"
    },
    {
      path: "/chat",
      text: "Чаты",
      icon: "/icons/chat.svg",
      layout: "icon-absolute",
      variant: "filled"
    },
    {
      path: "/psycologist-list",
      text: "Психологи",
      icon: "/icons/team.svg",
      layout: "icon-absolute",
      variant: "filled"
    },
    {
      path: "/events",
      text: 'События',
      icon: "/icons/glow.svg",
      layout: "icon-absolute",
      variant: "filled"
    },
    {
      path: "/4-4-4-4",
      text: 'Дыхание "4-4-4-4"',
      icon: "/icons/chill.svg",
      layout: "icon-absolute",
      variant: "filled"
    },
    {
      path: "/5-4-3-2-1",
      text: 'Практика "5-4-3-2-1"',
      icon: "/icons/eye.svg",
      layout: "icon-absolute",
      variant: "filled"
    },
  ];

  const isHidden = ['/Ffff/Ffff', '/Fftto/Fftto'];

  if (isHidden.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="nav">
      <ul className="nav__list" ref={navListRef}>
        {navItems.map(item => {
          const isActive = location.pathname === item.path;

          return (
            !isActive && <li key={item.path} className="nav__item">
              <Link to={item.path} className="nav__link">
                <Button
                  text={item.text}
                  icon={item.icon}
                  layout="icon-absolute"
                  variant={'filled'}
                  disabled={isActive} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav >
  );
};

export default Navigation;