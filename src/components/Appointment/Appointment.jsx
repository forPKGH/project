import React from "react";

import Button from "../Button/Button";

import "../Appointment/appointment.css"


const Appointment = () => {
  return (
    <div className="appointment">
      <div className="container">
        <div className="appointment__inner">
          <p className="appointment__info">Предстоящая запись на 15.08 в 16:30
            (Мамин-Сибиряк И. Д., 404 каб.)</p>
          <Button text="Сервер" icon="/icons/x.svg" variant='transparent' layout='icon-top' />
        </div>
      </div>
    </div>
  )
}

export default Appointment