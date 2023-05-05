import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler(userData) {
    setIsLoading(true);
    try {
      const token = await login(userData);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication Failed", error.message);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
