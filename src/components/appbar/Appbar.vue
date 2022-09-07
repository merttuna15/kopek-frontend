<template>
  <div>
    <v-app>
      <v-app-bar app clipped-leftS color="#6CC4A1" flat>
        <div class="items">
          <p>KÖPEKLER</p>
        </div>
        <v-spacer></v-spacer>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="@/assets/dogg.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item-avatar>
          <v-img to="/profile" class="profile" src="@/assets/profile.jpg"></v-img>
        </v-list-item-avatar>
      </v-app-bar>
    </v-app>
  </div>
</template>


<script>
export default {
  name: "customNavbar",


}
</script>

<style>
.items {
  margin-left: 200px;
}

.profile {
  margin-left: 10px;
}
</style>