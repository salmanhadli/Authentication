import axios from "axios";
const API_KEY = "AIzaSyAGElJces9tGaJauB4m1u9DFiliS01HpII";

export async function authenticate({ mode, email, password }) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(useData) {
  return authenticate({ mode: "signUp", ...useData });
}

export function login(useData) {
  return authenticate({ mode: "signInWithPassword", ...useData });
}
