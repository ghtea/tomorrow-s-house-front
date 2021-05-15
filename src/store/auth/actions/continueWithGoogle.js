import router from "../../../router/index";
import axios from "axios";

export default async function continueWithGoogle(context) {
  try {
    const authCode = await getAuthCode();

    const signInData = await requestContinueWithGoogle(authCode);

    const {token, user} = response.data;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = token;

    context.commit("putUser", token, user);
    router.push("/");
  } catch (error) {
    console.debug(error);

    context.commit("deleteUser");
    localStorage.removeItem("token");
  }
}

async function getAuthCode() {
  try {
    const authCode = await this.$gAuth.getAuthCode();
    return authCode;
  } catch (error) {
    throw {
      message: "getAuthCode has been failed"
    };
  }
}

async function requestContinueWithGoogle(authCode) {
  try {
    const config = {
      url: `${process.env.VUE_APP_BACKEND_URL}/auth/continue-with-google`,
      method: "POST",
      headers: { Authorization: authCode },
      withCredentials: true
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw {
      message: "requestContinueWithGoogle has been failed"
    };
  }
}
