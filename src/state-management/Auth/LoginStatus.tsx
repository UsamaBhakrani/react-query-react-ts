import useUserStore from "./store";

const LoginStatus = () => {
  const { login, logout, user } = useUserStore();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login("Mosh")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
