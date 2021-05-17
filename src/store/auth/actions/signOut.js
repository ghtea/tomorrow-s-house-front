import axios from 'axios';
import router from "../../../router/index";


export default function signOut(context) {
  applySignOut(context);
}


export function applySignOut(context, redirect) {
  context.commit("deleteUser");
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  //router.push(redirect || "/auth/sign-up");
}
