<template>
    <div class="page">
      <AppbarVue></AppbarVue>
      <footer-vue></footer-vue>
      <addBranchDialog></addBranchDialog>
        <branchTable></branchTable>
    </div>
  </template>
  
  <script>
  import AppbarVue from "@/components/appbar/Appbar.vue";
  import footerVue from "@/components/footer/footer.vue";
  import addBranchDialog from "@/dialog/addBranch.vue";
  import branchTable from "@/dataTables/branchDataTable.vue";



  
  export default {
    name: "CountryPage",
  
    components: { AppbarVue, footerVue, addBranchDialog, branchTable},
  };
  </script>
  
  <style>
  .page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100vh;
}
  </style>