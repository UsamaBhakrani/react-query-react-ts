import LoginStatus from "./Auth/LoginStatus";
import useCounterStore from "./Counter/store";

const NavBar = () => {
  const counter = useCounterStore((s) => s.counter);
  console.log("render nav");
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
