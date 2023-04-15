<template>
  <div>
    <v-col>
      <v-container>
        <v-card-title>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Arama" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="challenge" :search="search" class="elevation-10" style="background-color: #F2E3DB;">
          <template v-slot:[`item.full_name`]="{ item }">
            <div>
              <span v-for="(judge, index) in item.judge" :key="index">
                {{ judge.first_name }} {{ judge.last_name }}
                <span v-if="index < item.judge.length - 1">, </span>
              </span>
            </div>
          </template>

          <template v-slot:[`item.pet.name`]="{ item }">
            <span>{{ item.pet.map(p => p.name).join(", ") }}</span>
          </template>

        </v-data-table>
      </v-container>
    </v-col>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "challengeDataTable",
  data() {
    return {
      search: "",
      challenge: [],
      headers: [
        {
          text: "Yarışma Adı",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Adres", value: "address" },
        { text: "Şehir", value: "city.name" },
        { text: "Ülke", value: "country.name" },
        { text: "Hakemler", value: "full_name" },
        { text: "Katılan Hayvanlar", value: "pet.name" },

      ],
    };
  },
  methods: {
    getChallenge() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/challenge/",
      }).then((response) => {
        this.challenge = response.data;
      });
    },
  },
 
  mounted() {
    this.getChallenge();
  },
};
</script>
  
  
<style></style>