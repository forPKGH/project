import React from "react";
import "../account/account.css"

import AccountForm from "../../components/AccountForm/AccountForm";
import Button from "../../components/Button/Button";

const Account = () => {
  const accountData = {
    avatar: "/avatar.svg",
    name: "unknown",
    surname: "unknown",
    patronymic: "unknown",
    email: "unknown",
    password: "********",
  };

  return (
    <div className="account">
      <AccountForm data={accountData} />
      <Button className="account__save-button" text="Готово" icon="/icons/tick.svg" variant="filled" layout="icon-top" />
    </div>
  )
}

export default Account;