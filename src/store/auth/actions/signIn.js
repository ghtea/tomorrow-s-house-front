import router from "../../../router/index";
import {applySignOut} from "./signOut";
import axios from 'axios';

export default async function signIn(context, sendingData) {
  try {
    const signInData = await requestSignIn(sendingData);
    applySignIn(context, signInData);
  } catch (error) {
    console.debug(error);
    applySignOut(context);
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

export function applySignIn(context, signInData, redirect) {
  const { token, user } = signInData;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = token;

  context.commit("putUser", token, user);
  //router.push(redirect || "/"); // 현재와 같은 path로 push 하면 에러 떠서 우선 보류
}

