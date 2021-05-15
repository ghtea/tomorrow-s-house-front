import router from "../../../router/index";
import {applySignIn} from "./signIn";
import {applySignOut} from "./signOut";


export default async function signUp(context, sendingData) {
  try {
    const signUpData = await requestSignUp(sendingData);
    applySignIn(signUpData);
  } catch (error) {
    console.debug(error);
    applySignOut();
  }
}


async function requestSignUp() {
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
