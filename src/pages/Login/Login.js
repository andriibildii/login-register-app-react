import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from 'components/LoginForm';
import {setUser} from 'store/slices/userSlice';

import { Link } from "react-router-dom";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlelogin = async (email, password) => {
        try {
            const auth = getAuth();
            const {user} = await signInWithEmailAndPassword(auth, email, password);

            dispatch(setUser({
                fullName: user.displayName,
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));

             navigate('/');

        } catch (error) {
			alert('Invalid User! ' + error);
        }
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <div>
                <LoginForm
                    title='Login'
                    handleClick={handlelogin}
                />
            </div>
            <button className="link-btn"> <Link to='/register'>Don't have an account? Register here.</Link></button>
        </div>
    )
}