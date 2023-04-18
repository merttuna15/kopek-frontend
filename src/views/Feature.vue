<template>
    <div class="page" >
      <AppbarVue></AppbarVue>
      <v-row>
      <addColorDialog></addColorDialog>
      <addSizeDialog></addSizeDialog>
      <addRaceDialog></addRaceDialog>
      <addGadgetDialog></addGadgetDialog>
      </v-row>
      <footer-vue></footer-vue>
    </div>
  </template>
  
  <script>
  import AppbarVue from "@/components/appbar/Appbar.vue";
  import footerVue from "@/components/footer/footer.vue";
  import addColorDialog from "@/dialog/addColor.vue"
  import addSizeDialog from "@/dialog/addSize.vue"
  import addRaceDialog from "@/dialog/addRace.vue"
  import addGadgetDialog from "@/dialog/addGadget.vue"




  
  export default {
    name: "addFeaturePage",
  
    components: { AppbarVue, footerVue, addColorDialog, addSizeDialog, addRaceDialog, addGadgetDialog },
  };
  </script>
  
  <style>
  .page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
  </style>