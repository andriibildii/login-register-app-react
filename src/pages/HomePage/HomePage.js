import { Navigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAuth} from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, fullName, email} = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome {fullName}!</h1>
      <h2>You are very lucky</h2>

      <button
        onClick={() => dispatch(removeUser())}
      >Log out from {email}</button>
    
    </div>
  ) : (
    <Navigate to='/login' />
  )
}