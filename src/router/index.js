import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Axios from "../views/Axios";
import Login from "../views/Login";
import Country from "../views/Country";
import City from "../views/City";
import Info from "../views/CityInfo";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/axios",
    name: "axios",
    component: Axios,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/city/:cityName",
    name: "Info",
    component: Info
  },
  {
    path: "/country",
    name: "Country",
    component: Country,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/citylist/:countryName",
    name: "City",
    component: City
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach(async (to, from, next) => {
  try {
    await axios.get("/api/whoami");
  } catch (_) {
    if (to.meta.isPublic) {
      return next(true);
    }
    return next("/login");
  }
  next(true);
});

export default router;
