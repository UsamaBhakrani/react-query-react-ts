import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import LoginContext from "./contexts/loginContext";

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
