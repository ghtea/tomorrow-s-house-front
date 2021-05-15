export default function signOut(context) {
  applySignOut();
}


export function applySignOut(redirect) {
  context.commit("deleteUser");
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  router.push(redirect || "/");
}
