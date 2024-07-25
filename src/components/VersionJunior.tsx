
import { useState } from 'react';
import Input from './Input';


function VersionJunior() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [duplicate, setDuplicate] = useState('');

  const isValidPassword = password === duplicate;
  const isValidEmail = /^\S+@\S+\.\S+$/.test(email);


  const onChage = (fn: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    fn(value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidPassword || !isValidEmail) {
      return;
    }

    console.log('generate payload');
  }

  return (
      <form onSubmit={onSubmit}>
        <p>Регистрация</p>
        <Input
          placeholder="Имя"
          value={name}
          onChange={onChage(setName)}
          required
        />
        <Input
          placeholder="Фамилия"
          value={surname}
          onChange={onChage(setSurname)}
          required
        />
        <Input
          placeholder="E-mail"
          value={email}
          onChange={onChage(setEmail)}
          required
          errorMessage="Некорректная почта"
          error={!isValidEmail && email !== ''}
        />
        <Input
          placeholder="Пароль"
          value={password}
          onChange={onChage(setPassword)}
          required
          errorMessage="Пароли не совпадают"
          error={!isValidPassword}
          type="password"
        />
        <Input
          placeholder="Повторите пароль"
          value={duplicate}
          onChange={onChage(setDuplicate)}
          required
          errorMessage="Пароли не совпадают"
          error={!isValidPassword}
          type="password"
        />
      </form>
  );
}

export default VersionJunior;
