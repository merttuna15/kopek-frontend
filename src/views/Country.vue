<template>
    <div >
      <AppbarVue></AppbarVue>
      <footer-vue></footer-vue>
      <addCountryDialog></addCountryDialog>
      <countryTable></countryTable>
    </div>
  </template>
  
  <script>
  import AppbarVue from "@/components/appbar/Appbar.vue";
  import footerVue from "@/components/footer/footer.vue";
  import addCountryDialog from "@/dialog/addCountry.vue";
  import countryTable from "@/dataTables/countryDataTable.vue";


  
  export default {
    name: "CountryPage",
  
    components: { AppbarVue, footerVue, addCountryDialog, countryTable},
  };
  </script>
  
  <style>
  
  </style>