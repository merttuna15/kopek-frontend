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
            :items="country"
            :search="search"
            class="elevation-10"
          >
          </v-data-table>
        </v-container>
      </v-col>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "countryTable",
    data() {
      return {
        search: "",
        country: [],
        headers: [
          {
            text: "İsim",
            align: "start",
            sortable: false,
            value: "name",
          },
        ],
      };
    },
    methods: {
      getCountry() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/country/",
        }).then((response) => {
          this.country = response.data;
        });
      },
    },
    mounted() {
      this.getCountry();
    },
  };
  </script>
  
  <style>
  </style>