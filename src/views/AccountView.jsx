import { View } from "react-native";
import { LoginForm, UserDetail } from "../components/auth";
import { useAuth } from "../hooks";

export function AccountView() {
  const {auth} = useAuth();

  return <View>{auth ? <UserDetail /> : <LoginForm /> }</View>;
}
