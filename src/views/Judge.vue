<template>
  <div>
  <AppbarVue></AppbarVue>
  <addJudgeDialog></addJudgeDialog>
  <judgeDataTable></judgeDataTable>
  
</div>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import addJudgeDialog from "@/dialog/addJudge.vue"
import judgeDataTable from "@/dataTables/judgeDataTable.vue"
export default {
  name: "judgePage",
  components: { AppbarVue, addJudgeDialog, judgeDataTable },
};
</script>