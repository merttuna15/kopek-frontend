<template>
  <div>
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  beforeCreate() {
    this.$store.commit("initializeStore");
    const access = this.$store.state.access;
    if (access) {
      axios.defaults.headers.common["Authorization"] = "JWT" + access;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {
    setInterval(() => {
      this.getAccess()
    }, 59000)
  },
  methods: {
    getAccess() {
      const accessData = {
        refresh: this.$store.state.refresh
      }

      axios
        .post('http://127.0.0.1:8000/api/v1/jwt/refresh/', accessData)
        .then(response => {
          const access = response.data.access
          localStorage.setItem('access', access)
          this.$store.commit('setAccess', access)
        })
        .catch(error => {
          console.log(error)
        })
    },
    logOut() {
      this.$store.commit("logOut");
    },

  }
};
</script>

<style>
</style>
