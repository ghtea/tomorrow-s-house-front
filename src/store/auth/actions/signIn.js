import router from "../../../router/index";
import {applySignOut} from "./signOut";

export default async function signIn(context, sendingData) {
  try {
    const signInData = await requestSignIn(sendingData);
    applySignIn(signInData);
  } catch (error) {
    console.debug(error);
    applySignOut();
  }
}

async function requestSignIn(sendingData) {
  try {
    const config = {
      url: `${process.env.VUE_APP_BACKEND_URL}/auth/sign-in`,
      method: "POST",
      data: sendingData,
      withCredentials: true
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw {
      message: "requestSignIn has been failed"
    };
  }
}

export function applySignIn(signInData, redirect) {
  const { token, user } = signInData;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = token;

  context.commit("putUser", token, user);
  router.push(redirect || "/");
}

