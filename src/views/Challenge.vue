<template>
  <div>
  <AppbarVue></AppbarVue>
  <v-row>
  <addChallangeDialog></addChallangeDialog>
  <addAwardDialog></addAwardDialog>
  <addPetChallengeDialog></addPetChallengeDialog>
</v-row>
  <challengeCard></challengeCard>
  <challengeDataTable></challengeDataTable>
  <petChallengeDataTable></petChallengeDataTable>
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
import petChallengeDataTable from "@/dataTables/petChallengeDataTable.vue"
import addPetChallengeDialog from "@/dialog/addPetChallenge.vue"




export default {
  name: "challengePage",
  components: { AppbarVue, addChallangeDialog, challengeDataTable,petChallengeDataTable, challengeCard, addAwardDialog, awardDataTable, addPetChallengeDialog },
};
</script>