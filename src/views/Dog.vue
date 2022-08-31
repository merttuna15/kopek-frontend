<template>
  <div>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "dogPage",
  components: { NavBar },

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