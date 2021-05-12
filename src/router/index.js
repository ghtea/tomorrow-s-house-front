import Vue from 'vue';
import VueRouter from 'vue-router'
import Menu from '@/views/menu'
import Main from '@/views/main'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
        menu: Menu,
        content: Main
    }
},
]

export const router = new VueRouter ({
  routes
})
