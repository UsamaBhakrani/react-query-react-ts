import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";

interface Login {
  type: "LOGIN";
  payload: string;
}
interface Logout {
  type: "LOGOUT";
}

export type LoginActions = Login | Logout;

const loginReducer = (state: string, action: LoginActions): string => {
  if (action.type === "LOGIN") return action.payload;
  if (action.type === "LOGOUT") return "";
  return "";
};


interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, authDispatch] = useReducer(loginReducer, "");
  return (
    <LoginContext.Provider value={{ user, dispatch: authDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default AuthProvider;
