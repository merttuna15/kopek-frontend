<template>
  <div>
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