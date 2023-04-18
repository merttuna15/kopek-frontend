<template>
  <div>
    <v-col>
      <v-container>
        <v-card-title>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Arama" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="dogs" :search="search" class="elevation-10"
          style="background-color: #F2E3DB;">
          <template v-slot:[`item.full_name`]="{ item }">
            <span>{{
              item.owner.first_name + " " + item.owner.last_name
            }}</span>
          </template>

          <template v-slot:[`item.gadgets`]="{ item }">
            <div>{{ [item.gadget.collet, item.gadget.dress, item.gadget.shoes].filter(Boolean).join(", ") }}</div>
          </template>

         


        </v-data-table>
      </v-container>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dogDataTable",
  data() {
    return {
      search: "",
      dogs: [],
      headers: [
        {
          text: "İsim",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Sahibi", value: "full_name" },
        { text: "Doğum Tarihi", value: "birth_date" },
        { text: "Renk", value: "color.name" },
        { text: "Boyut", value: "size.name" },
        { text: "Kıyafetler", value: "gadgets" },
        { text: "Hastalık", value: "illness.name" },
      ],
    };
  },
  methods: {
    getDog() {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/pet/",
      }).then((response) => {
        this.dogs = response.data;
      });
    },
  },
  mounted() {
    this.getDog();
  },
};
</script>
