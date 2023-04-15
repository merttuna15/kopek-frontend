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
          <v-data-table
            :headers="headers"
            :items="petillness"
            :search="search"
            class="elevation-10"
            style="background-color: #F2E3DB;"
          >
          </v-data-table>
        </v-container>
      </v-col>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "petIllnessDataTable",
    data() {
      return {
        search: "",
        petillness: [],
        headers: [
          {
            text: "Köpeğin Adı",
            align: "start",
            sortable: false,
            value: "pet.name",
          },
          { text: "Hastalık Tipi", value: "type.name" },
          { text: "Hastalığın Kategorisi", value: "category" },
        ],
      };
    },
    methods: {
      getPetIllness() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/petillness/",
        }).then((response) => {
          this.petillness = response.data;
        });
      },
    },
    mounted() {
      this.getPetIllness();
    },
  };
  </script>
  
  <style>
  </style>