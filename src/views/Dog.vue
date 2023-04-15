<template>
  <div>
    <Appbar></Appbar>
    <v-row>
    <addDogDialog></addDogDialog>
   
  </v-row>
  <dogsCard></dogsCard>
  <dogDataTable></dogDataTable>
 
  </div>
</template>

<script>
import addDogDialog from "@/dialog/addDog.vue";
import dogDataTable from "@/dataTables/dogDataTable.vue";
import Appbar from "@/components/appbar/Appbar.vue";
import dogsCard from "@/card/dogs.vue";

export default {
  name: "dogPage",
  components: { addDogDialog, Appbar, dogsCard,  dogDataTable,  },

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