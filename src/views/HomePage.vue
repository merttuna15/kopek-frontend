<template>
  <div class="car">
    <v-app>
      <homePageCor></homePageCor>
    </v-app>
  </div>
</template>

<script>
import homePageCor from '@/components/carousels/homePageCor';

export default {
  name: "homePage",

  components: { homePageCor },

};
</script>

<style>
  .car{
    width: 1200px;
    height: 400px;
    align-items: center;
    margin-left: 300px;
  }
</style>