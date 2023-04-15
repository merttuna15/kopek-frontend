<template>
  <v-footer style="background-color: #40513B;" elevation="10" app bottom padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Köpekler Sitesi</strong>
    </v-col>
  </v-footer>
</template>
  <script>
export default {
  name: "footerCom",
};
</script>