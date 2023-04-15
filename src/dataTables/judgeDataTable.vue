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
            :items="judge"
            :search="search"
            class="elevation-10"
            style="background-color: #F2E3DB;"
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
    name: "judgeDataTable",
    data() {
      return {
        search: "",
        judge: [],
        headers: [
          { text: "İsim", align: "start", sortable: false, value: "full_name" },
          { text: "Doğum Tarihi", value: "birth_date" },
          { text: "Telefon No.", value: "phone" },
          { text: "E-posta", value: "email" },
        ],
      };
    },
    methods: {
      getJudge() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/judge/",
        }).then((response) => {
          this.judge = response.data.map((d) => ({
            ...d,
            full_name: `${d.first_name} ${d.last_name}`,
          }));
        });
      },
    },
    mounted() {
      this.getJudge();
    },
  };
  </script>
  
  <style>
  </style>
  