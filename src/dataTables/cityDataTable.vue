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
            :items="city"
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
    name: "cityTable",
    data() {
      return {
        search: "",
        city: [],
        headers: [
          {
            text: "Şehir",
            align: "start",
            sortable: false,
            value: "name",
          },
          {text:"Ülke", value:"country.name"}
        ],
      };
    },
    methods: {
      getCity() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/city/",
        }).then((response) => {
          this.city = response.data;
        });
      },
    },
    mounted() {
      this.getCity();
    },
  };
  </script>
  
  <style>
  </style>