import { View } from "react-native";
import { LoginForm, UserDetail } from "../components/auth";

export function AccountView() {
  const auth = null;

  return <View>{auth ? <UserDetail /> : <LoginForm /> }</View>;
}
