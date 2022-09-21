<template>
  <div>
    <v-app>
      <v-container>
        <v-data-table :headers="headers" :items="dogs" class="elevation-10">
          <template v-slot:[`owner.full_name`]="{ owners }">
            {{ owners.first_name }}
            {{ owners.last_name }}
          </template>
        </v-data-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dogCard",
  data() {
    return {
      dogs: [],
      owners: [{ first_name: "first_name", last_name: "last_name" }],
      headers: [
        {
          text: "İsim",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Owner", value: "full_name" },
        { text: "Doğum Tarihi", value: "birth_date" },
        { text: "Renk", value: "color.name" },
        { text: "Boyut", value: "size.name" },
        { text: "Kıyafetler", value: "gadget.dress" },
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