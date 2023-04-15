<template>
    <div>
      <v-container class="my-10 mr-5 mt-5">
        <v-layout row wrap>
          <v-flex xs10 sm5 md4 lg2 v-for="doctor in doctors" :key="doctor.first_name">
            <v-card
              color="#9DC08B"
              elevation="5"
              flat
              :class="{ 'text-xs-center': true, 'ma-3': true }"
            >
              <v-container class="name">{{ doctor.first_name }} {{ doctor.last_name }}</v-container>
              <v-card-text>
                <div v-if="doctor.phone">Telefon No.: {{ doctor.phone }}</div>
                <div v-if="doctor.email">email: {{ doctor.email }}</div>
                <div v-if="doctor.branch">Branş: {{ doctor.branch.name }}</div>
                <div v-if="doctor.hospital">Hastane: {{ doctor.hospital.name }}</div>
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
    name: "doctorCard",
    data() {
      return {
        doctors: [],
      };
    },
    methods: {
      getDoctors() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/doctor/",
        }).then((response) => {
          this.doctors = response.data;
          console.log(response.data);
        });
      },
    },
    mounted() {
      this.getDoctors();
    },
  };
  </script>
  
  <style>
  .name {
    margin-left: 80px;
    font-size: large;
  }
  </style>
  