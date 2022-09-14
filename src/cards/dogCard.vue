<template>
  <div>
    <v-app>
      <v-container>
          <v-data-table :headers="headers" :items="dogs"  class="elevation-10" ></v-data-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "dogCard",
  data() {
    return {
      dogs: [],
      headers: [
          {
            text: 'İsim',
            align: 'start',
            sortable: false,
            value: "name",
          },
          { text: 'Sahibi', value:[ "owner.first_name" , "owner.last_name"] },
          { text: 'Doğum Tarihi', value: 'birth_date' },
          { text: 'Renk', value: 'color.name' },
          { text: 'Boyut', value: 'size.name' },
          { text: 'Kıyafetler',  value: 'gadget.dress' },
          { text: 'Hastalık', value: 'illness' },
        ],
    }
  },
  methods: {
    getDog() {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/pet/'
      })
        .then(response => {
          this.dogs = response.data;
        })
    }
  },
  mounted() {
    this.getDog();

  }
}
</script>