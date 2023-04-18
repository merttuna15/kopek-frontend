<template>
    <div class="page" >
      <AppbarVue></AppbarVue>
      <addCityDialog></addCityDialog>
      <cityTable></cityTable>
      <footer-vue></footer-vue>
    </div>
  </template>
  
  <script>
  import AppbarVue from "@/components/appbar/Appbar.vue";
  import footerVue from "@/components/footer/footer.vue";
  import addCityDialog from "@/dialog/addCity.vue";
  import cityTable from "@/dataTables/cityDataTable.vue";




  
  export default {
    name: "CountryPage",
  
    components: { AppbarVue, footerVue, addCityDialog, cityTable},
  };
  </script>
  
  <style>
  .page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
  </style>