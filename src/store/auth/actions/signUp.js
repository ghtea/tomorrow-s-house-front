import axios from 'axios';
import router from "../../../router/index";
import {applySignIn} from "./signIn";
import {applySignOut} from "./signOut";


export default async function signUp(context, sendingData) {
  try {
    const signUpData = await requestSignUp(sendingData);
    applySignIn(context, signUpData);
  } catch (error) {
    console.debug(error);
    applySignOut(context);
  }
}


async function requestSignUp(sendingData) {
  try {
    const config = {
      url: `${process.env.VUE_APP_BACKEND_URL}/auth/sign-up`,
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
