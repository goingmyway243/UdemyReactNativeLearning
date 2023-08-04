import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../context/auth-context";
import { login } from "../utils/auth-api";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AuthContext);

  async function submitLogin({ email, password }) {
    setIsLoading(true);
    try {
      const token = await login(email, password);
      context.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed!",
        "Please check your credentials and try again!"
      );
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message={"Logging you in..."} />;
  }

  return <AuthContent isLogin onAuthenticate={submitLogin} />;
}

export default LoginScreen;
