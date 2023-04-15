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
            :items="hospital"
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
    name: "hospitalDataTable",
    data() {
      return {
        search: "",
        hospital: [],
        headers: [
          {
            text: "Hastane Adı",
            align: "start",
            sortable: false,
            value: "name",
          },
          { text: "Adres", value: "address" },
          { text: "Telefon No.", value: "phone" },
          { text: "Şehir", value: "city.name" },
        ],
      };
    },
    methods: {
      getHospital() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/hospital/",
        }).then((response) => {
          this.hospital = response.data;
        });
      },
    },
    mounted() {
      this.getHospital();
    },
  };
  </script>
  
  <style>
  </style>