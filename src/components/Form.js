import { useState } from "react";

export const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    return (
        <form className="login-register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input 
                type="email"
                defaultValue={email} 
                onChange={handleEmail}
                placeholder="email@gmail.com" 
                // id="email" 
                // name="email" 
            />
            <label htmlFor="password">password</label>
            <input 
                type="password" 
                defaultValue={pass} 
                onChange={handlePass}
                placeholder="********"
                // id="password" 
                // name="password" 
                autoComplete="on"      
            />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </form>
    )
}