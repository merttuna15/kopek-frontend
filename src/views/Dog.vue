<template>
  <div class="page">
    <Appbar></Appbar>
    <v-row>
    <addDogDialog></addDogDialog>
   <addOwnerDialog></addOwnerDialog>
  </v-row>
  <dogsCard></dogsCard>
  <dogDataTable></dogDataTable>
  <ownerDataTable></ownerDataTable>
 
  </div>
</template>

<script>
import addDogDialog from "@/dialog/addDog.vue";
import dogDataTable from "@/dataTables/dogDataTable.vue";
import Appbar from "@/components/appbar/Appbar.vue";
import dogsCard from "@/card/dogs.vue";
import addOwnerDialog from "@/dialog/addOwner.vue"
import ownerDataTable from "@/dataTables/ownerDataTable.vue"

export default {
  name: "dogPage",
  components: { addDogDialog, Appbar, dogsCard,  dogDataTable, addOwnerDialog, ownerDataTable },

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
.page {
  background: url("@/assets/playingdogs.jpg");
  background-size: cover;
  height: 100%;
}
</style>