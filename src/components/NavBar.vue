<template>
  <v-app-bar app color="#59CE8F" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="avatar" color="grey darken-1" size="32"></v-avatar>

      <v-item-group class="navbar">
        <v-btn text to="/">Anasayfa</v-btn>
        <v-btn text to="/dog">Köpekler</v-btn>
        <v-btn text to="/profile">Profil</v-btn>
        <v-btn text @click="logOut">Çıkış yap </v-btn>
      </v-item-group>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "customNavbar",
  data() {
    return {
      access: this.access,
      refresh: this.refresh,
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
.navbar {
  margin-left: 10%;
}
</style>