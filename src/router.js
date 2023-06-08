import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Main from "./components/Main.vue";
import Result from "./components/Result.vue";
// lazy-loaded

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  const loggedIn = localStorage.getItem('user');
  if (!loggedIn) {
    next();
  } else {
    next();
  }
  //console.log(loggedIn);
/*  if (loggedIn) {
    next('/main');
  } else {
    if(to.path !=='/'){
      next('/');
    } else {
      next();
    }
  }*/
});


export default router;