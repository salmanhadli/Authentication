import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler(userData) {
    setIsLoading(true);
    try {
      const token = await createUser(userData);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert("Authentication Failed", error.message);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
