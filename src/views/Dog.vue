<template>
  <div>
    <Appbar></Appbar>
    <dogCard></dogCard>
    <addDogDialog></addDogDialog>
  </div>
</template>

<script>
import dogCard from "@/dialog/addDog.vue";
import addDogDialog from "@/dataTables/dogDataTable.vue";
import Appbar from "@/components/appbar/Appbar.vue";

export default {
  name: "dogPage",
  components: { dogCard, addDogDialog, Appbar },

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