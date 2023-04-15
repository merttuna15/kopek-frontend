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
            :items="branch"
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
    name: "branchTable",
    data() {
      return {
        search: "",
        branch: [],
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
      getBranch() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/branch/",
        }).then((response) => {
          this.branch = response.data;
        });
      },
    },
    mounted() {
      this.getBranch();
    },
  };
  </script>
  
  <style>
  </style>