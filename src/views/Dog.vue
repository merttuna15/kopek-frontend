<template>
  <div>
    <Appbar></Appbar>
    <dogCard></dogCard>
    <dogs></dogs>
    <addDogDialog></addDogDialog>
    <footerVue></footerVue>
  </div>
</template>

<script>
import dogCard from "@/dialog/addDog.vue";
import addDogDialog from "@/dataTables/dogDataTable.vue";
import Appbar from "@/components/appbar/Appbar.vue";
import footerVue from "@/components/footer/footer.vue";
import dogs from "@/dataTables/dogs.vue";

export default {
  name: "dogPage",
  components: { dogCard, addDogDialog, Appbar, footerVue, dogs },

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