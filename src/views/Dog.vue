<template>
  <div>
    <Appbar></Appbar>
    <dogCard></dogCard>
    <dogsCard></dogsCard>
    <addDogDialog></addDogDialog>
    <footerVue></footerVue>
  </div>
</template>

<script>
import dogCard from "@/dialog/addDog.vue";
import addDogDialog from "@/dataTables/dogDataTable.vue";
import Appbar from "@/components/appbar/Appbar.vue";
import footerVue from "@/components/footer/footer.vue";
import dogsCard from "@/card/dogs.vue";

export default {
  name: "dogPage",
  components: { dogCard, addDogDialog, Appbar, footerVue, dogsCard },

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