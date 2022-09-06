<template>
  <div>
    <AppbarVue></AppbarVue>
    <v-card>
      <v-layout class="adddog">
    <v-flex class="mt-4 mb-3">
      <addDogDialog></addDogDialog>
    </v-flex>
  </v-layout>
  </v-card>
  </div>
</template>

<script>
import AppbarVue from '@/components/appbar/Appbar.vue';
import addDogDialog from '@/dialog/addDog.vue';


export default {
  name: "dogPage",
  components: { AppbarVue, addDogDialog },

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
  .adddog{
    margin-top: 100px ;
    margin-left: 100px;
  }
</style>