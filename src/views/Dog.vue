<template>
  <div>
    <AppbarVue></AppbarVue>
      <addDogDialog></addDogDialog>
      <dogCard></dogCard>
  </div>
</template>

<script>
import AppbarVue from '@/components/appbar/Appbar.vue';
import addDogDialog from '@/dialog/addDog.vue';
import dogCard from '@/cards/dogCard.vue'



export default {
  name: "dogPage",
  components: { AppbarVue, addDogDialog, dogCard  },

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