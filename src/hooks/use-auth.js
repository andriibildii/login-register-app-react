import { useSelector } from 'react-redux';

function useAuth() {
  const { fullName, email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    fullName,
    email,
    token,
    id,
  };
}

export default useAuth;
