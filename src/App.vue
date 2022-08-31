<template>
  <div>
    <customNavbar></customNavbar>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import customNavbar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { customNavbar },
  created() {
    this.$store.commit("initializeStore");

    const access = this.$store.state.access;

    if (access) {
      axios.defaults.headers.common["Authorization"] = "JWT" + access;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>
