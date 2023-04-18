<template>
  <div class="page">
  <AppbarVue></AppbarVue>
  <addDoctor></addDoctor>
  <doctorCard></doctorCard>
  <doctorDataTable></doctorDataTable>
</div>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import addDoctor from "@/dialog/addDoctor.vue";
import doctorDataTable from "@/dataTables/doctorDataTable.vue"
import doctorCard from "@/card/doctor.vue"

export default {
  name: "doctorPage",
  components: { AppbarVue, addDoctor, doctorDataTable, doctorCard },
};
</script>

<style>
.page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
</style>