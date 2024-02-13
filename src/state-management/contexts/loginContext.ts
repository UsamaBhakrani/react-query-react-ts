import { Dispatch, createContext, useContext } from "react";
import { LoginActions } from "../reducers/loginReducer";

interface LoginContext {
  user: string;
  dispatch: Dispatch<LoginActions>;
}

const LoginContext = createContext<LoginContext>({} as LoginContext);

const useLoginContext = () => {
  return useContext(LoginContext);
};

export { useLoginContext };
export default LoginContext;
