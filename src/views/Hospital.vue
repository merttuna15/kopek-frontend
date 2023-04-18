<template>
  <div class="page">
    <AppbarVue></AppbarVue>
    <addHospitalDialog></addHospitalDialog>
    <hospitalCard></hospitalCard>
    <hospitalDataTable></hospitalDataTable>
  </div>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import addHospitalDialog from "@/dialog/addHospital.vue";
import hospitalDataTable from "@/dataTables/hospitalDataTable.vue";
import hospitalCard from "@/card/hospital.vue"

export default {
  name: "hospitalPage",
  components: { AppbarVue, addHospitalDialog, hospitalDataTable, hospitalCard },
};
</script>

<style>
.page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
</style>