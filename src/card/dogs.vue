<template>
  <div>
    <v-container class="my-10 mr-5 mt-5">
      <v-layout row wrap>
        <v-flex xs10 sm5 md4 lg2 v-for="dog in dogs" :key="dog.id">
          <v-card color="#9DC08B" elevation="5" flat :class="{ 'text-xs-center': true, 'ma-3': true }">
            <v-card-title>{{ dog.name }}</v-card-title>
            <v-container>
              <v-card-text>
                <div>
                  Sahibi: {{ dog.owner.first_name }} {{ dog.owner.last_name }}
                </div>
                <div v-if="dog.color">Rengi: {{ dog.color.name }}</div>
                <div v-if="dog.size">Boyutu: {{ dog.size.name }}</div>
                <div>Doğum Tarihi: {{ dog.birth_date }}</div>
                <div v-if="dog.parent">Annesi: {{ dog.parent.name }}</div>
              </v-card-text>
            </v-container>
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
    };
  },
  methods: {
    getDogs() {
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
    this.getDogs();
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
