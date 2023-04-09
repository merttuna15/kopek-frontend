<template>
  <div>
  <AppbarVue></AppbarVue>
  <addChallangeDialog></addChallangeDialog>
  <challengeCard></challengeCard>
  <challengeDataTable></challengeDataTable>
</div>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import addChallangeDialog from "@/dialog/addChallange.vue"
import challengeDataTable from "@/dataTables/challengeDataTable.vue"
import challengeCard from "@/card/challenge.vue"

export default {
  name: "challengePage",
  components: { AppbarVue, addChallangeDialog, challengeDataTable, challengeCard },
};
</script>