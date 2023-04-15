<template>
  <div >
    <v-app style="background-color: #EDF1D6">
      <router-view />
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
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

<style>
</style>
