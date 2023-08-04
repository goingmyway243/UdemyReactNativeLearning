import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../context/auth-context";
import { createUser } from "../utils/auth-api";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AuthContext);

  async function submitCreateUser({ email, password }) {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
      context.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed!",
        "Please check your input and try again!"
      );
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message={"Creating user..."} />;
  }

  return <AuthContent onAuthenticate={submitCreateUser} />;
}

export default SignupScreen;
