import { useState } from 'react';
import PropTypes from 'prop-types';

function RegisterForm({ title, handleClick }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <form className="login-register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">full name</label>
      <input
        type="text"
        defaultValue={fullName}
        onChange={handleName}
        placeholder="John Doe"
        name="name"
        id="name"
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        defaultValue={email}
        onChange={handleEmail}
        placeholder="email@gmail.com"
        name="email"
        id="email"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        defaultValue={pass}
        onChange={handlePass}
        placeholder="********"
        name="password"
        autoComplete="on"
        id="password"
      />
      <button onClick={() => handleClick(fullName, email, pass)} type="submit">
        {title}
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RegisterForm;
