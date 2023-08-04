import axios from "axios";

const API_KEY = "AIzaSyCtjsY0MsxSE-swzin6updcRB3ohNvBp4E";

export async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  return response.data.idToken;
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
