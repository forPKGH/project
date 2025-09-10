import React from "react";
import { Link } from 'react-router-dom';
import '../DiariesMenu/diariesMenu.css'
import Button from "../Button/Button";

const DiariesMenu = () => {
  return (
    <div className="diaries-menu">
      <div className="container">
        <div className="diaries-menu__inner">
          <div className="diaries-menu__left">
            <Link to="/diaryFeelings">
              <Button text="Дневник чувств" icon="/icons/heart.svg" variant="filled" layout="icon-right-large"></Button>
            </Link>
            <Link to="/diaryFood">
              <Button text="Дневник питания" icon="/icons/food.svg" variant="filled" layout="icon-right-large"></Button>
            </Link>
          </div>
          <div className="diaries-menu__right">
            <Link to="/diary">
              <Button text="Личный дневник" icon="/icons/diary.svg" variant="filled" layout="icon-right-large"></Button>
            </Link>
            <Link to="/phones">
              <Button text="Телефоны поддержки" icon="/icons/phone.svg" variant="filled" layout="icon-right-large"></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiariesMenu;