import Vue from "vue";
import Router from "vue-router";
import HomePage from '../views/HomePage'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Challenge from '../views/Challenge'
import Doctor from '../views/Doctor'
import Dog from '../views/Dog'
import Hospital from '../views/Hospital'
import Judge from '../views/Judge'
import Feature from '@/views/Feature'
import Country from '@/views/Country'
import City from '@/views/City'
import Branch from '@/views/Branch'
import Illness from '@/views/Illness'


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
      path: '/feature',
      name: 'Feature',
      component: Feature,
    },
    {
      path: '/country',
      name: 'Country',
      component: Country,
    },
    {
      path: '/city',
      name: 'City',
      component: City,
    },
    {
      path: '/branch',
      name: 'Branch',
      component: Branch,
    },
    {
      path: '/illness',
      name: 'Illness',
      component: Illness,
    },
  ]
});
