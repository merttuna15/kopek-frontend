<template>
  <div>
  <AppbarVue></AppbarVue>
  <v-row>
  <addChallangeDialog></addChallangeDialog>
  <addAwardDialog></addAwardDialog>
</v-row>
  <challengeCard></challengeCard>
  <challengeDataTable></challengeDataTable>
  <awardDataTable></awardDataTable>
</div>
</template>

<script>
import AppbarVue from "@/components/appbar/Appbar.vue";
import addChallangeDialog from "@/dialog/addChallange.vue"
import challengeDataTable from "@/dataTables/challengeDataTable.vue"
import challengeCard from "@/card/challenge.vue"
import addAwardDialog from "@/dialog/addAward.vue"
import awardDataTable from "@/dataTables/awardDataTable.vue"



export default {
  name: "challengePage",
  components: { AppbarVue, addChallangeDialog, challengeDataTable, challengeCard, addAwardDialog, awardDataTable },
};
</script>