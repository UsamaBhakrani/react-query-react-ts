import { useLoginContext } from "./contexts/loginContext";

const LoginStatus = () => {
  const { user, dispatch } = useLoginContext();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", payload: "Usama" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
