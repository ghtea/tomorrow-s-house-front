import router from "../../../router/index";

export default function signIn(context, user) {
  return new Promise((resolve, reject) => {
    // context.commit('auth_request')
    axios({
      url: `${process.env.VUE_APP_BACKEND_URL}/auth/sign-in`,
      data: user,
      method: "POST"
    })
      .then(response => {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        context.commit("putUser", token, user);
        router.push("/");
        resolve(response);
      })
      .catch(error => {
        context.commit("deleteUser");
        localStorage.removeItem("token");
        reject(error);
      });
  });
}
