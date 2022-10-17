import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../../components/LoginForm';
import { setUser } from '../../store/slices/userSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogin = async (email, password) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        setUser({
          fullName: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );

      navigate('/');
    } catch (error) {
      console.log(`Invalid User! + ${error}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <div>
        <LoginForm title="Login" handleClick={handlelogin} />
      </div>
      <button className="link-btn" type="submit">
        {' '}
        <Link to="/register">Don&apos;t have an account? Register here.</Link>
      </button>
    </div>
  );
}

export default LoginPage;
