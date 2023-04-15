<template>
  <div>
    <v-layout>
      <v-app-bar elevation="10" color="#9DC08B" flat app>
        <v-app-bar-nav-icon
          class="black--text" 
          @click.stop="mini = !mini"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase black--text">
          <span>Köpekler</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="logOut()" text color="black">
          <span>Çıkış Yap</span>
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        app
        elevation="10"
        :mini-variant.sync="mini"
        permanent
        text
        hide-overlay
        color="#9DC08B"
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
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>


<script>
export default {
  name: "customNavbar",
  data() {
    return {
      drawer: false,
      mini: true,
      access: this.access,
      refresh: this.refresh,
      navbarlist: [
        { icon: "mdi-home", text: "Anasayfa", route: "/" },
        { icon: "mdi-dog", text: "Köpekler", route: "/dog" },
        { icon: "mdi-doctor", text: "Doktorlar", route: "/doctor" },
        { icon: "mdi-hospital-building", text: "Hastaneler", route: "/hospital" },
        { icon: "mdi-play", text: "Yarışmalar", route: "/challenge" },
        { icon: "mdi-account", text: "Hakemler", route: "/judge" },
        { icon: "mdi-application", text: "Özellik Ekle", route: "/feature" },
        { icon: "mdi-map", text: "Ülkeler", route: "/country" },
        { icon: "mdi-map-marker", text: "Şehirler", route: "/city" },
        { icon: "mdi-source-branch", text: "Doktor Branşları", route: "/branch" },
        { icon: "mdi-hospital-box", text: "Hastalıklar", route: "/illness" },
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
.items {
  margin-left: 200px;
}

.profile {
  margin-left: 10px;
}
</style>