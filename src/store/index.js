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
    initializeStore(state) {
      if (localStorage.getItem("access")) {
        state.access = localStorage.getItem("access");
        state.refresh = localStorage.getItem("refresh");
      } else {
        state.access = "";
        state.refresh = "";
      }
    },
    setAccess(state, access) {
      state.access = access;
    },
    setRefresh(state, refresh) {
      state.refresh = refresh;
    },
  },
  actions: {
    logOut({ commit }) {
      commit("setAccess", "");
      commit("setRefresh", "");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    },
  },
});

store.commit("initializeStore");

export default store;
