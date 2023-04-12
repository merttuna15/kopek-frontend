<template>
    <div>
      <v-container class="my-10 mr-5 mt-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="judge in judges" :key="judge.first_name">
            <v-card
              color="#A8E890"
              elevation="5"
              flat
              :class="{ 'text-xs-center': true, 'ma-3': true }"
            >
              <v-container class="name">{{ judge.first_name }} {{ judge.last_name }}</v-container>
              <v-card-text>
                <div v-if="judge.birth_date">Doğum Tarihi: {{ judge.birth_date }}</div>
                <div v-if="judge.phone">Telefon No.: {{ judge.phone }}</div>
                <div v-if="judge.email">E-mail: {{ judge.email }}</div>
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
    name: "judgeCard",
    data() {
      return {
        judges: [],
      };
    },
    methods: {
      getJudges() {
        axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/judge/",
        }).then((response) => {
          this.judges = response.data;
          console.log(response.data);
        });
      },
    },
    mounted() {
      this.getJudges();
    },
  };
  </script>
  
  <style>
  .name {
    margin-left: 80px;
    font-size: large;
  }
  </style>
  