import Vue from "vue";
import Router from "vue-router";
import HomePage from '../views/HomePage'
import Login from '../views/Login'
import Register from '../views/Register'
import Challenge from '../views/Challenge'
import Doctor from '../views/Doctor'
import Dog from '../views/Dog'
import Hospital from '../views/Hospital'
import Judge from '../views/Judge'
import Profile from '../views/Profile'




Vue.use(Router);



export default new Router({
    mode: 'history',

    routes: [
    // Routes
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
      path: '/dog',
      name: 'Dog',
      component: Dog,
    },
    {
      path: '/challenge',
      name: 'Challenge',
      component: Challenge,
    },
    {
      path: '/doctor',
      name: 'Doctor',
      component: Doctor,
    },
    {
      path: '/hospital',
      name: 'Hospital',
      component: Hospital,
    },
    {
      path: '/judge',
      name: 'Judge',
      component: Judge,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    }
  ]
});
