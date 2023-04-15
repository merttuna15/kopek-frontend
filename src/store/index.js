import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const store = new Vuex.Store({
  state: {
    access: "",
    refresh: "",
  },
  mutations: {
    setAccess(state, access) {
      state.access = access;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
    },
    initializeStore(state) {
      if (localStorage.getItem("access")) {
        state.access = localStorage.getItem("access");
      }
      if (localStorage.getItem("refresh")) {
        state.refresh = localStorage.getItem("refresh");
      }
    },
  },
  actions: {
    updateToken({ commit }, payload) {
      commit("setAccess", payload.access);
      commit("setRefresh", payload.refresh);
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
    },
    logOut({ commit }) {
      commit("setAccess", "");
      commit("setRefresh", "");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.access,
    accessToken: (state) => state.access,
    refreshToken: (state) => state.refresh,
  },
  modules: {},
});

store.commit("initializeStore");

export default store;
