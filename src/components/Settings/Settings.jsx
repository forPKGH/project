import React from "react";
import { Link } from "react-router-dom";
import "../Settings/settings.css"
import Button from "../Button/Button"

const Settings = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="settings" onClick={handleOverlayClick}>
      <div className="container">
        <div className="settings__inner" onClick={e => e.stopPropagation()}>
          <h2 className="settings__title">Настройки</h2>
          <ul className="settings__options">
            <li className="settings__options-item" onClick={e => onClose()}>Запустить обучение</li>
            <li className="settings__options-item" onClick={e => onClose()}><a href="https://t.me/kirk74">Предложить идею</a></li>
            <li className="settings__options-item" onClick={e => onClose()}><Link to="/Account">Настроить профиль</Link></li>
          </ul>

          {/* тут будет логика для темы */}
          <button className="change-theme-button change-theme-button--light">Изменить тему</button>
          <Button className="settings__close-btn" text="" variant="transparent" layout="icon-only" icon={"/icons/x.svg"} onClick={e => onClose()} />
        </div>
      </div>
    </div>
  )
}

export default Settings;