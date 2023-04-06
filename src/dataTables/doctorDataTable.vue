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
            :items="doctor"
            :search="search"
            class="elevation-10"
          >
            <template v-slot:[`item.full_name`]="{ item }">
              <span>{{ item.full_name }}</span>
            </template>
          </v-data-table>
        </v-container>
      </v-col>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "doctorDataTable",
    data() {
      return {
        search: "",
        doctor: [],
        headers: [
          { text: "İsim", align: "start", sortable: false, value: "full_name" },
          { text: "Telefon No.", value: "phone" },
          { text: "email", value: "email" },
          { text: "Branş", value: "branch.name" },
          { text: "Hastane", value: "hospital.name" },
        ],
      };
    },
    methods: {
      getDoctor() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/doctor/",
        }).then((response) => {
          this.doctor = response.data.map((d) => ({
            ...d,
            full_name: `${d.first_name} ${d.last_name}`,
          }));
        });
      },
    },
    mounted() {
      this.getDoctor();
    },
  };
  </script>
  
  <style>
  </style>
  