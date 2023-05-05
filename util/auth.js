import axios from "axios";
const API_KEY = "AIzaSyAGElJces9tGaJauB4m1u9DFiliS01HpII";

export async function authenticate({ mode, email, password }) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
}

export async function createUser(useData) {
  await authenticate({ mode: "signUp", ...useData });
}

export async function login(useData) {
  await authenticate({ mode: "signInWithPassword", ...useData });
}
