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
export default loginReducer;
