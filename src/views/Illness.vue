<template>
    <div>
      <AppbarVue></AppbarVue>
      <footer-vue></footer-vue>
      <v-row class="row">
      <addIllnessTypeDialog></addIllnessTypeDialog>
      <addIllnessDialog></addIllnessDialog>
    </v-row>
    <illnessTypeTable></illnessTypeTable>
    <illnessTable></illnessTable>
    </div>
  </template>
  
  <script>
  import AppbarVue from "@/components/appbar/Appbar.vue";
  import footerVue from "@/components/footer/footer.vue";
  import addIllnessTypeDialog from "@/dialog/addIllnessType.vue";
  import addIllnessDialog from "@/dialog/addIllness.vue";
  import illnessTypeTable from "@/dataTables/illnesstypeDataTable.vue";
  import illnessTable from "@/dataTables/illnessDataTable.vue";


  
  export default {
    name: "IllnessPage",
  
    components: { AppbarVue, footerVue, addIllnessTypeDialog, addIllnessDialog, illnessTypeTable, illnessTable},
  };
  </script>
  
  <style>
  .row{
    margin-left: 100px;
  }
  </style>