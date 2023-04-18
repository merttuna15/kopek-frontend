<template>
    <div class="page">
      <AppbarVue></AppbarVue>
      <footer-vue></footer-vue>
      <v-row class="row">
      <addIllnessTypeDialog></addIllnessTypeDialog>
      <addIllnessDialog></addIllnessDialog>
      <addPetIllnessDialog></addPetIllnessDialog>
    </v-row>
    <illnessTypeTable></illnessTypeTable>
    <illnessTable></illnessTable>
    <petIllnessDataTable></petIllnessDataTable>
    </div>
  </template>
  
  <script>
  import AppbarVue from "@/components/appbar/Appbar.vue";
  import footerVue from "@/components/footer/footer.vue";
  import addIllnessTypeDialog from "@/dialog/addIllnessType.vue";
  import addIllnessDialog from "@/dialog/addIllness.vue";
  import illnessTypeTable from "@/dataTables/illnesstypeDataTable.vue";
  import illnessTable from "@/dataTables/illnessDataTable.vue";
  import addPetIllnessDialog from "@/dialog/addPetIllness.vue"
  import petIllnessDataTable from "@/dataTables/petIllnessDataTable.vue"

  
  export default {
    name: "IllnessPage",
  
    components: { AppbarVue, footerVue, addIllnessTypeDialog, addIllnessDialog, illnessTypeTable, illnessTable, addPetIllnessDialog, petIllnessDataTable},
  };
  </script>
  
  <style>
  .row{
    margin-left: 100px;
  }
  .page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
  </style>