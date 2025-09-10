import { useState } from "react";
import signUpWithProfile, { SignUpWithProfile } from "../../services/auth";
import PopUp from "../PopUp/PopUp";

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signUpWithProfile(email, password, name, surname, patronymic, avatar);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage('Что-то пошло не так, попробуйте ещё раз');
    }
  }

  const closePopUp = () => setErrorMessage('');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Фамилия" value={surname} onChange={e => setSurname(e.target.value)} />
        <input type="text" placeholder="Отчество" value={patronymic} onChange={e => setPatronymic(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="file" accept="image/*" onChange={e => setAvatar(e.target.files[0])} />
        <button type="submit">Зарегистрироваться</button>
      </form>

      {errorMessage && <PopUp text={errorMessage} bgColor="#FF000060" onClose={closePopUp} />}
    </>
  )
}

export default RegisterForm;