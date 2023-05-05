import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  async function signupHandler(userData) {
    setIsLoading(true);
    try {
      await createUser(userData);
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
