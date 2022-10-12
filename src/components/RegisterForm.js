import { useState } from "react";

export const RegisterForm = ({title, handleClick}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleName = (e) => {
        setFullName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    return (
        <form className="login-register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input 
                type="text"
                defaultValue={fullName} 
                onChange={handleName} 
                placeholder="full name" 
                name="name" 
            />
            <label htmlFor="email">email</label>
            <input 
                type="email"
                defaultValue={email} 
                onChange={handleEmail}
                placeholder="email@gmail.com" 
                name="email" 
            />
            <label htmlFor="password">password</label>
            <input 
                type="password" 
                defaultValue={pass} 
                onChange={handlePass}
                placeholder="********"
                name="password" 
                autoComplete="on"      
            />
            <button
                onClick={() => handleClick(fullName, email, pass)}
            >
                {title}
            </button>
        </form>
    )
}