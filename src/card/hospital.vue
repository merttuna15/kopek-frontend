<template>
    <div>
      <v-container class="my-10 mr-5 mt-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="hospital in hospitals" :key="hospital.name">
            <v-card
              color="#A8E890"
              elevation="5"
              flat
              :class="{ 'text-xs-center': true, 'ma-3': true }"
            >
              <v-container class="name">{{ hospital.name }}</v-container>
              <v-card-text>
                <div v-if="hospital.address">Adres: {{ hospital.address }}</div>
                <div v-if="hospital.phone">Telefon No.: {{ hospital.phone }}</div>
                <div v-if="hospital.city">Şehir: {{ hospital.city.name }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "hospitalCard",
    data() {
      return {
        hospitals: [],
      };
    },
    methods: {
      getHospital() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/hospital/",
        }).then((response) => {
          this.hospitals = response.data;
          console.log(response.data);
        });
      },
    },
    mounted() {
      this.getHospital();
    },
  };
  </script>
  
  <style>
  .name {
    margin-left: 80px;
    font-size: large;
  }
  </style>
  