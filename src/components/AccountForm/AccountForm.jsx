import React, { useState } from "react";

import "../AccountForm/account-form.css"

const AccountForm = ({ data }) => {

  return (
    <div className="container">
      <div className="account__form">
        <input className="account__info account__info--avatar" type="file" />
        <input className="account__info" type="text" defaultValue={data.name} placeholder="Имя" />
        <input className="account__info" type="text" defaultValue={data.surname} placeholder="Фамилия" />
        <input className="account__info" type="text" defaultValue={data.patronymic} placeholder="Отчество" />
        <input className="account__info" type="email" defaultValue={data.email} placeholder="E-mail" />
        <input className="account__info" type="password" defaultValue={data.password} placeholder="Пароль" />
      </div>
    </div>
  )
}

export default AccountForm;