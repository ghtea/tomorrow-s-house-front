import Vue from "vue";
import VueRouter from "vue-router";

import DefaultLayout from "../layouts/default/Index";
import AuthLayout from "../layouts/auth/Index";

import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";

import ProductList from "../views/default/ProductList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: DefaultLayout,
    children: [
      {
        path: "product-list",
        name: "productList",
        component: ProductList,
      },
    ],
  },

  {
    path: "/auth",
    name: "auth",
    component: AuthLayout,
    children: [
      {
        path: "sign-in",
        name: "authSignIn",
        component: SignIn,
      },
      {
        path: "sign-up",
        name: "authSignUp",
        component: SignUp,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
