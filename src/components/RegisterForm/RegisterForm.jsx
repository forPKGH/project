import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signUpWithProfile(email, password, name, surname, patronymic, avatar);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Что-то пошло не так, попробуйте ещё раз');
    }
  }

  return (
    <div className="container">
      <form className="account__form">
        <input className="account__info account__info--avatar" type="file" />
        <input className="account__info" type="text" placeholder="Имя" />
        <input className="account__info" type="text" placeholder="Фамилия" />
        <input className="account__info" type="text" placeholder="Отчество" />
        <input className="account__info" type="email" placeholder="E-mail" />
        <input className="account__info" type="password" placeholder="Пароль" />
        <button type="submit" className="account__button">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default RegisterForm;