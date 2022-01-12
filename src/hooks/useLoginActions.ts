import { useDispatch } from "react-redux";
import { IUser } from "..";
import { logout as signout } from "../helpers/auth";
import { LoginActions } from "../state/login/LoginAction";

export default function useLoginActions() {
  const dispatch = useDispatch();
  const logout = async () => signout(dispatch);

  const setUser = async (user: IUser) => {
    return dispatch(LoginActions.GetUserOnSuccess(user));
  };

  return {
    logout,
    setUser,
  };
}
