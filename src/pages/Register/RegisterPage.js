import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import RegisterForm from '../../components/RegisterForm';
import { setUser } from '../../store/slices/userSlice';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (fullName, email, password) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: fullName,
      }).then(() => {
        dispatch(
          setUser({
            fullName,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <div>
        <RegisterForm title="Register" handleClick={handleRegister} />
      </div>
      <button className="link-btn" type="submit">
        <Link to="/login">Already have an account? Login here.</Link>
      </button>
    </div>
  );
}

export default RegisterPage;
