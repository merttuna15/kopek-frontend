<template>
  <div>
    <Appbar></Appbar>
    <v-row>
    <addDogDialog></addDogDialog>
    <addPetChallengeDialog></addPetChallengeDialog>
  </v-row>
  <dogsCard></dogsCard>
  <dogDataTable></dogDataTable>
    <footerVue></footerVue>
  </div>
</template>

<script>
import addDogDialog from "@/dialog/addDog.vue";
import dogDataTable from "@/dataTables/dogDataTable.vue";
import Appbar from "@/components/appbar/Appbar.vue";
import footerVue from "@/components/footer/footer.vue";
import dogsCard from "@/card/dogs.vue";
import addPetChallengeDialog from "@/dialog/addPetChallenge.vue"

export default {
  name: "dogPage",
  components: { addDogDialog, Appbar, footerVue, dogsCard, addPetChallengeDialog, dogDataTable },

  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style>
</style>