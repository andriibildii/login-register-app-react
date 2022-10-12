import { useSelector } from "react-redux";

export function useAuth() {
    const {fullName, email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        fullName,
        email,
        token,
        id,
    }
}