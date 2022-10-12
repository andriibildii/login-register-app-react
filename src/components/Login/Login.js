import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email: ' + email + ', ' + 'pass: ' + pass);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }


    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
            <button className="link-btn"> <Link to='/register'>Don't have an account? Register here.</Link></button>      
        </div>
    )
}