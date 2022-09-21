<template>
  <div>
    <v-app>
      <v-navigation-drawer
        app
        flat
        color="#6CC4A1"
        mini-variant
        permanent
        expand-on-hover
      >
        <v-list>
          <v-list-item
            v-for="item in navbarlist"
            :key="item.route"
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ item.text }}</v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn @click="logOut" text class="logout">
          <v-icon class="logoutIcon">mdi-logout</v-icon>Çıkış Yap</v-btn
        >
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "customDrawer",
  data() {
    return {
      access: this.access,
      refresh: this.refresh,
      navbarlist: [
        { icon: "mdi-home", text: "Anasayfa", route: "/" },
        { icon: "mdi-dog", text: "Köpekler", route: "/dog" },
        { icon: "mdi-doctor", text: "Doktorlar", route: "/doctor" },
        { icon: "mdi-hospital", text: "Hastaneler", route: "/hospital" },
        { icon: "mdi-play", text: "Yarışmalar", route: "/challenge" },
        { icon: "mdi-account", text: "Hakemler", route: "/judge" },
      ],
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.logout {
  margin-top: 320px;
}

.logoutIcon {
  margin-right: 15px;
}
</style>