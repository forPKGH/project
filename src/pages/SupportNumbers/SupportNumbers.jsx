import React from "react";
import Button from "../../components/Button/Button";
import "../SupportNumbers/SupportNumbers.css"

const hotlines = [
  {
    title: "Детский телефон доверия (24/7, анонимно)",
    number: "8 (800) 2000-122"
  },
  {
    title: "Помощь пережившим сексуальное насилие (анонимно)",
    number: "8 (499) 901-02-01"
  },
  {
    title: "Горячая линия для девушек, пострадавших от насилия (24/7, бесплатно)",
    number: "8 (800) 7000-600"
  },
  {
    title: "Телефон доверия Психологической клиники СПбГУ (анонимно, бесплатно)",
    number: "8 (800) 550-01-22"
  },
  {
    title: "Горячая линия по ВИЧ/СПИДу (анонимно, бесплатно)",
    number: "8 (800) 100-65-43"
  },
  {
    title: "Федеральная горячая линия по вопросам наркомании и зависимости",
    number: "8 (800) 700-50-50"
  },
  {
    title: "Единый экстренный номер",
    number: "112"
  }
];

export default function HotlineList() {
  return (
    <div className="container">
      <ul className="note-list">
        {hotlines.map((item, index) => (
          <a key={item.number} href={`tel:${item.number.replace(/[^+\d]/g, "")}`} >
            <li className="note-list__item" key={index}>
              <div className="note-list__info">
                <h2 className="note-list__title">{item.title}</h2>
                <span className="note-list__date">{item.number}</span>
              </div>
              <div className="note-list__buttons">
                <Button
                  text="Позвонить"
                  icon="/icons/phone.svg"
                  variant="transparent"
                  layout="icon-top-no-bg"
                />
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div >
  );
}