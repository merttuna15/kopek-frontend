<template>
  <div class="page">
  <AppbarVue></AppbarVue>
  <addJudgeDialog></addJudgeDialog>
  <judgeCard></judgeCard>
  <judgeDataTable></judgeDataTable>
  
</div>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import addJudgeDialog from "@/dialog/addJudge.vue"
import judgeDataTable from "@/dataTables/judgeDataTable.vue"
import judgeCard from "@/card/judge.vue"
export default {
  name: "judgePage",
  components: { AppbarVue, addJudgeDialog, judgeDataTable, judgeCard },
};
</script>

<style>
.page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
</style>