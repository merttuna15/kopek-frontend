<template>
  <v-footer elevation="10" app bottom padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Kopek</strong>
    </v-col>
  </v-footer>
</template>
  <script>
export default {
  name: "footerCom",
};
</script>