<template>
  <div>
    <v-container class="my-10; mr-5; mt-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="dog in dogs" :key="dog.name">
          <v-card
            color="#A8E890"
            elevation="5"
            flat
            class="text-xs-center ma-3"
          >
            <v-container class="name">{{ dog.name }}</v-container>
            <v-responsive class="pt-4"> image goes here </v-responsive>
            <v-card-text>
              <div>
                Sahibi: {{ dog.owner.first_name }} {{ dog.owner.last_name }}
              </div>
              <div>Rengi: {{ dog.color.name }}</div>
              <div>Boyutu: {{ dog.size.name }}</div>
              <div>Hastalığı: {{ dog.illness.name }}</div>
              <div>Doğum Tarihi: {{ dog.birth_date }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="black">
                <v-icon small left>mdi-message</v-icon>
                <span>incele</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dogsCard",
  data() {
    return {
      owner: [],
      dogs: [],
      dog: [],
    };
  },
  methods: {
    getDog() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/pet/",
      }).then((response) => {
        this.dogs = response.data;
        console.log(response.data);
      });
    },
    getOwner() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/owner/",
      }).then((response) => {
        this.owner = response.data;
        console.log(response.data);
      });
    },
  },
  mounted() {
    this.getDog();
    this.getOwner();
  },
};
</script>

<style>
.name {
  margin-left: 80px;
  font-size: large;
}
</style>