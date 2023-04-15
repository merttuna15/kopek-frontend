<template>
  <div>
    <v-col>
      <v-container>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Arama"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="petchallenge" :search="search" class="elevation-10" style="background-color: #F2E3DB;">
          <template v-slot:[`item.pet.name`]="{ item }">
            <span>{{ item.pet.map(p => p.name).join(", ") }}</span>
          </template>
          <template v-slot:[`item.challenge.name`]="{ item }">
            <span>{{ item.challenge.map(p => p.name).join(", ") }}</span>
          </template>
        </v-data-table>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "petChallengeDataTable",
  data() {
    return {
      search: "",
      petchallenge: [],
      headers: [
        { text: "Katılan Köpekler", align: "start", sortable: false, value: "pet.name" },
        { text: "Katıldığı Yarışmalar", value: "challenge.name" },
        { text: "Kazandığı Ödüller", value: "award.name" },
        { text: "Irkı", value: "race.name" },
      ],
    };
  },
  methods: {
    getPetChallenge() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/petchallenge/",
      }).then((response) => {
        this.petchallenge = response.data;
      });
    },
  },
  mounted() {
    this.getPetChallenge();
  },
};
</script>
