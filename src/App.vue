<template>
  <div>
    <AppbarVue></AppbarVue>
    <DrawerVue></DrawerVue>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import DrawerVue from "@/components/drawer/Drawer.vue";
import AppbarVue from "@/components/appbar/Appbar.vue";

export default {
  name: "App",
  components: { AppbarVue, DrawerVue },
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
