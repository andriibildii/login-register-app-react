import { useState } from "react";

export const Register = ({onFormSwitch}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('name: ' + name + ', ' + 
                    'email: ' + email + ', ' +
                    'pass: ' + pass);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    return (
        <div className="form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input 
                defaultValue={name} 
                onChange={handleName} 
                name="name" 
                id="name" 
                placeholder="Full name" 
            />
            <label htmlFor="email">email</label>
            <input 
                defaultValue={email} 
                onChange={handleEmail}
                type="email" 
                placeholder="email@gmail.com" 
                id="email" 
                name="email" 
            />
            <label htmlFor="password">password</label>
            <input 
                defaultValue={pass} 
                onChange={handlePass} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" 
                autoComplete="on"
            />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}