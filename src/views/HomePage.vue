<template>
  <div class="page">
  <div class="car">
    <AppbarVue></AppbarVue>
    <homePageCor></homePageCor>
    <footer-vue></footer-vue>
  </div>
</div>
</template>

<script>
import homePageCor from "@/components/carousels/homePageCor";
import AppbarVue from "@/components/appbar/Appbar.vue";
import footerVue from "@/components/footer/footer.vue";

export default {
  name: "homePage",

  components: { homePageCor, AppbarVue, footerVue },
};
</script>

<style>
.car {
  width: 1200px;
  height: 400px;
  align-items: center;
  margin-left: 300px;
}

.page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100vh;
}
</style>